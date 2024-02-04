import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../../constant/constant';
import { getCookie } from '../../utils/api';
import './ListStudent.scss'
import APIapp from '../../components/APIapp/APIapp';
import * as XLSX from 'xlsx';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 120,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            },
        },
    },
}));



function ListStudent() {
    const columns = [
        { field: 'studentId', headerClassName: 'header-table', headerName: 'Mã số sinh viên', width: 200 },
        { field: 'groupName', headerClassName: 'header-table', headerName: 'Nhóm', width: 100 },
        { field: 'name', headerClassName: 'header-table', headerName: 'Tên sinh viên', width: 200 },
        { field: 'courseName', headerClassName: 'header-table', headerName: 'Môn học', width: 150 },
        {
            field: 'detail',
            headerClassName: 'header-table',
            headerName: 'Xem chi tiết',
            width: 150,
            sortable: false,
            renderCell: (params) => (
              <a
                style={{cursor: 'pointer', color:'#007BFF'}}
                onClick={() => handleOpenDetail(params.row.studentId)}
              >Details
              </a>
            ),
        },
        {
            field: 'update',
            headerClassName: 'header-table',
            headerName: 'Cập nhật',
            width: 150,
            sortable: false,
            renderCell: (params) => (
              <button
                style={{cursor: 'pointer', color:'white', border:'none', backgroundColor:'#007BFF'}}
                onClick={() => handleUpdate(params.id, params.row.studentId)}
              >Thêm nhóm
              </button>
            ),
        },
    ];
    
    const [open, setOpen] = React.useState(false)
    const [currentId, setCurrentId] = React.useState(0)
    const [currentStudent, setCurrentStudent] = React.useState('')
    const [group,setGroup] = React.useState('')
    
    const handleUpdate= (id,studentId)=>{
        setOpen(true)
        setCurrentId(id)
        setCurrentStudent(studentId)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const [orders, setOrders] = React.useState([]);

    const navigate = useNavigate();

    const storageKey = JSON.parse(localStorage.getItem('storageKey'))

    React.useEffect(() => {
        axios
            .get(`${apiBaseUrl}/student_teacher/teacher/${storageKey.username}?semeter=20231`, {
                headers: {
                    // token: Cookies.get('token'),
                    Authorization: getCookie('Authorization'),
                },
            })
            .then((response) => {
                // setBooking(Response.products);
                console.log(response.data);
                setOrders(response.data);
            });
    }, []);
    const handleOpenDetail = (code) => {
        navigate(`${code}`);
    };

    const handleSetGroup = async()=>{
        const res = await APIapp.put(`/student_teacher/${currentId}?group=${group}`)
        console.log(res)
        setOpen(false)
        window.location.reload()
    }

    const data1=[
        {
            "classId":"733507",
            "courseId":"IT3910Q",
            "name":"Project I",
            "sectionType":"ĐAMH",
            "note":"Project I",
            "studentId":"20198246",
            "studentName":"Vũ Quang Lam",
            "email":"Lam.vq198246@sis.hust.edu.vn",
            "projectName":"",
            "groupName":"SIE"
        }
    ]

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data1);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    
        const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(dataBlob);
    
        const link = document.createElement('a');
        link.href = url;
        link.download = 'exported_data.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    


    const [data, setData] = React.useState([]);
    const [semeter, setSemeter] = React.useState('')

    const handleFileUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
        const reader = new FileReader();

        reader.onload = (event) => {
            const binaryString = event.target.result;
            const workbook = XLSX.read(binaryString, { type: 'binary' });

            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert sheet data to array of objects
            const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            const [headers, ...rows] = sheetData;
            const dataArray = rows.map((row) =>
            headers.reduce((acc, header, index) => {
                acc[header] = row[index];
                return acc;
            }, {})
            );

            setData(dataArray);
        };

        reader.readAsBinaryString(file);
        }
    };

    const handleAddClick=()=>{
        const userConfirmed = window.confirm('Chú ý kiểm tra thông tin cũng như kỳ học 1 cách chính xác!!! Bạn có chắc muốn thêm các sinh viên?');
        if(userConfirmed){
            handleAddStudent()
        }else{

        }
    }

    const handleAddStudent= async()=>{
        console.log(data)
        try{
            for(let i=0;i<data.length;i++){
                if(data[i].classId){
                    const res = await APIapp.post(`/exeladd/${storageKey.username}/${semeter}`,data[i])
                }
            }

            window.location.reload()
        }catch(e){

        }
    }

    return (
        <div style={{ width: 'calc(82vw - 44px)' }}>
            
            <DataGrid
                rows={orders}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                localeText={{
                    MuiTablePagination: {
                        labelDisplayedRows: ({ from, to, count }) =>
                            `Kết quả từ ${from} đến ${to} trên tổng số ${count}`,
                        labelRowsPerPage: 'Hiển thị',
                    },
                }}
                getRowId={(row) => row.id}
                sx={{ width: '100%', marginTop: '10px', backgroundColor: 'white' }}
            />
            <div className='add-exel'>
                <h4>Thêm sinh viên bằng file exel</h4>
                <span style={{color:'red'}}>Chú ý đổi tên các cột trong file như trong mẫu sau: <button onClick={exportToExcel}>Tải tệp mẫu</button></span>
                <label htmlFor="">Kỳ học</label>
                <input type="text" onChange={(e)=>{setSemeter(e.target.value)}}/>
                <label htmlFor="">Tải tệp lên</label>
                <input type="file" onChange={handleFileUpload} />
                <button onClick={handleAddClick}>Thêm sinh viên</button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Thêm nhóm cho sinh viên</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Sinh viên: {currentStudent}
                    </DialogContentText>
                    <DialogContentText>
                        Tên nhóm
                    </DialogContentText>
                    <input type="text" style={{height:'30px', fontSize:'16px', width:'100%'}} onChange={(e)=>{setGroup(e.target.value)}}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button type="submit" onClick={handleSetGroup}>Cập nhật</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ListStudent;
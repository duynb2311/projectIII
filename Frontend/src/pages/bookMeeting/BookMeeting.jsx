import './BookMeeting.scss'
import { useRef, useState } from 'react';
import APIapp from '../../components/APIapp/APIapp';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import { getCookie } from '../../utils/api';

function BookMeeting(){

    const columns = [
        { field: 'id', headerClassName: 'header-table', headerName: 'ID', width: 50 },
        { field: 'day', headerClassName: 'header-table', headerName: 'Ngày gặp', width: 150 },
        { field: 'startTime', headerClassName: 'header-table', headerName: 'Bắt đầu', width: 150 },
        { field: 'endTime', headerClassName: 'header-table', headerName: 'Kết thúc', width: 150 },
        {
            field: 'teacher',
            headerClassName: 'header-table',
            headerName: 'Giảng viên',
            width: 200,
            sortable: false,
            renderCell: (params) => (
              <div>
                    <span>Trương Thị Diệu Linh</span>
              </div>
            ),
        },
        {
            field: 'status',
            headerClassName: 'header-table',
            headerName: 'Trạng thái',
            width: 150,
            sortable: false,
            renderCell: (params) => (
              <div>
                    {(params.row.status ===1)?<span style={{cursor: 'pointer', color:'white', backgroundColor:'#28A745',padding:'3px', borderRadius:'3px'}} >Chưa đặt</span>:
                    <span style={{cursor: 'pointer', color:'white', backgroundColor:'#DC3545',padding:'3px', borderRadius:'3px'}}>Đã đặt</span>}
              </div>
            ),
        },
        {
            field: 'detail',
            headerClassName: 'header-table',
            headerName: 'Đặt lịch hẹn',
            width: 100,
            sortable: false,
            renderCell: (params) => (
              <div>
                    {(params.row.status ===1)&&<button
                    style={{cursor: 'pointer', color:'white', border:'none', backgroundColor:'#007BFF',padding:'3px', borderRadius:'3px'}}
                    onClick={() => handleBook(params.row)}
                    >Đặt lịch
                    </button>}
              </div>
            ),
        },
    ];
    const [freeTimes, setFreeTimes] = useState([])

    useEffect(()=>{
        const fetchData= async ()=>{
            const res= await APIapp.get(`/freetime/after`)
            console.log(res)
            setFreeTimes(res.data)
        }
        fetchData()
    },[])

    const storageKey = JSON.parse(localStorage.getItem('storageKey'))
    
    const handleBook = async (row)=>{
        const isConfirmed = window.confirm("Bạn có chắc chắn muốn đặt lịch")
        if(isConfirmed){
            try{
                console.log(row)
                const meeting = {
                    "teacherId":"duynb123",
                    "studentId":storageKey.username,
                    "meetingDate":row.day,
                    "startTime":row.startTime,
                    "endTime":row.endTime,
                    "freeTimeId":row.id,
                    "studentNote":"",
                    "teacherNote":""
                }
                const res = await APIapp.post(`/meeting`,meeting)
                window.location.reload()
            }catch(e){

            }
        }
    }


    return(
        <div className='book-meeting'>
            <DataGrid
                rows={freeTimes}
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
        </div>
    )
}

export default BookMeeting
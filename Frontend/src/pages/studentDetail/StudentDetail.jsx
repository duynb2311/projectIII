import './StudentDetail.scss'
import { useRef, useState } from 'react';
import APIapp from '../../components/APIapp/APIapp';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';



const columns = [
    { field: 'id', headerClassName: 'header-table', headerName: 'ID', width: 50 },
    { field: 'meetingDate', headerClassName: 'header-table', headerName: 'Ngày gặp', width: 150 },
    { field: 'startTime', headerClassName: 'header-table', headerName: 'Bắt đầu', width: 150 },
    { field: 'endTime', headerClassName: 'header-table', headerName: 'Kết thúc', width: 150 },
    {
        field: 'detail',
        headerClassName: 'header-table',
        headerName: 'Xem chi tiết',
        width: 100,
        sortable: false,
        renderCell: (params) => (
          <a
            style={{cursor: 'pointer', color:'#007BFF'}}
            onClick={() => handleDetail(params.id)}
          >Details
          </a>
        ),
    },
];

const handleDetail = (id)=>{
    window.location.href = `/teacher/meeting/${id}`
}

function StudentDetail() {

    const {id} = useParams()
    const [student, setStudent] = useState({})
    const [history, setHistory] = useState([])
    const storageKey = JSON.parse(localStorage.getItem('storageKey'))

    useEffect(()=>{
        const fetchData=async()=>{
            const student = await APIapp.get(`/student/${id}`)
            console.log(student)
            setStudent(student.data)
            const history = await APIapp.get(`meeting/history?teacherId=${storageKey.username}&studentId=${id}`)
            setHistory(history.data)
        }
        fetchData()
    },[])

    return(
        <div className='student-detail'>
            <div className='left'>
                <div className='top'>Thông tin sinh viên</div>
                <label htmlFor="">Mã số sinh viên</label>
                <span>{student.id}</span>
                <label htmlFor="">Họ và tên</label>
                <span>{student.name}</span>
                <label htmlFor="">Email</label>
                <span>{student.email}</span>
            </div>
            <div className='right'>
                <div className='top'>Lịch sử họp</div>
                <DataGrid
                rows={history}
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
        </div>
    )
}

export default StudentDetail
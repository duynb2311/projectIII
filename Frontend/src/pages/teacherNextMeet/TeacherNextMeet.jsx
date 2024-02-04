import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../../constant/constant';
import { getCookie } from '../../utils/api';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import APIapp from '../../components/APIapp/APIapp';

const columns = [
    { field: 'id', headerClassName: 'header-table', headerName: 'ID', width: 70 },
    { field: 'name', headerClassName: 'header-table', headerName: 'Sinh viên', width: 200 },
    { field: 'date', headerClassName: 'header-table', headerName: 'Ngày hẹn gặp', width: 150 },
    { field: 'startTime', headerClassName: 'header-table', headerName: 'Bắt đầu', width: 150 },
    { field: 'endTime', headerClassName: 'header-table', headerName: 'Kết thúc', width: 150 },
    {
        field: 'delete',
        headerClassName: 'header-table',
        headerName: 'Xóa cuộc hẹn',
        width: 150,
        sortable: false,
        renderCell: (params) => (
          <IconButton
            color="primary"
            onClick={() => handleDelete(params.id)}
          >
            <DeleteIcon />
          </IconButton>
        ),
    },
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

const handleDelete = async (id) => {
    const deleted = await APIapp.delete(`/meeting/${id}`)
    console.log(`Delete button clicked for ID: ${id}`);
};

const handleDetail = (id)=>{
    window.location.href = `/teacher/meeting/${id}`
}



function TeacherNextMeet(){
    const [meetings, setMeetings] = React.useState([])
    const storageKey = JSON.parse(localStorage.getItem('storageKey'))

    React.useEffect(()=>{
        axios
            .get(`${apiBaseUrl}/meeting/teacher/${storageKey.username}`, {
                headers: {
                    // token: Cookies.get('token'),
                    Authorization: getCookie('Authorization'),
                },
            })
            .then((response) => {
                // setBooking(Response.products);
                console.log(response.data);
                setMeetings(response.data);
            });
    },[])
    

    return(
        <div style={{ width: 'calc(82vw - 44px)' }}>
            <DataGrid
                rows={meetings}
                columns={columns}
                // getRowId={getRowId}
                //onRowClick={handleOpenDetail}
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

export default TeacherNextMeet
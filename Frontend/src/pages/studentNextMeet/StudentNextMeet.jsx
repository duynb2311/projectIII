import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from '../../constant/constant';
import { getCookie } from '../../utils/api';

const columns = [
    { field: 'id', headerClassName: 'header-table', headerName: 'ID', width: 70 },
    { field: 'name', headerClassName: 'header-table', headerName: 'Giảng viên', width: 230 },
    { field: 'date', headerClassName: 'header-table', headerName: 'Ngày hẹn gặp', width: 170 },
    { field: 'startTime', headerClassName: 'header-table', headerName: 'Bắt đầu', width: 170 },
    { field: 'endTime', headerClassName: 'header-table', headerName: 'Kết thúc', width: 170 },
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
    window.location.href = `/student/meeting/${id}`
}



function StudentNextMeet(){
    const [meetings, setMeetings] = React.useState([])
    const storageKey = JSON.parse(localStorage.getItem('storageKey'))

    React.useEffect(()=>{
        axios
            .get(`${apiBaseUrl}/meeting/student/${storageKey.username}`, {
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

export default StudentNextMeet
import './CreateFreeTime.scss'
import { useRef, useState } from 'react';
import APIapp from '../../components/APIapp/APIapp';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'id', headerClassName: 'header-table', headerName: 'ID', width: 100 },
    { field: 'day', headerClassName: 'header-table', headerName: 'Ngày hẹn', width: 200 },
    { field: 'startTime', headerClassName: 'header-table', headerName: 'Bắt đầu', width: 100 },
    { field: 'endTime', headerClassName: 'header-table', headerName: 'Kết thúc', width: 100 },
    {
        field: 'delete',
        headerClassName: 'header-table',
        headerName: 'Tùy chọn',
        width: 100,
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
];

const handleDelete = async (id) => {
    const deleted = await APIapp.delete(`/freetime/${id}`)
    console.log(`Delete button clicked for ID: ${id}`);
};

function CreateFreeTime(){
    const storageKey = JSON.parse(localStorage.getItem('storageKey'))
    const [freeTime, setFreeTime] = useState({
        teacherId: storageKey.username,
        day: '',
        startTime: '',
        endTime: '',
        status: 1
    })
    const [freeTimes, setFreeTimes] = useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            const res = await APIapp.get(`/freetime/after`)
            console.log(res)
            setFreeTimes(res.data)
        }
        fetchData()
    },[])
    
    const handlecreate = async ()=>{
        try{
            const res = await APIapp.post(`/freetime`, freeTime)
            window.location.reload()
            console.log(res)
        }catch(e){
            window.alert("Khoảng thời gian đã bị trùng")
        }
    }
    

    return(
        <div className='create-free-time'>
            <div className='left'>
                <div className='top'>Tạo lịch rảnh</div>
                <label htmlFor="">Ngày hẹn</label>
                <input type="date" onChange={(e)=>{setFreeTime({...freeTime, day: e.target.value})}}/>
                <label htmlFor="">Thời gian bắt đầu</label>
                <input type="time" onChange={(e)=>{setFreeTime({...freeTime, startTime: e.target.value+':00'})}}/>
                <label htmlFor="">Thời gian kết thúc</label>
                <input type="time" onChange={(e)=>{setFreeTime({...freeTime, endTime: e.target.value+':00'})}}/>
                <button onClick={handlecreate}>Tạo</button>
            </div>
            <div className='right'>
                <div className='top'>Danh sách lịch rảnh</div>
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
        </div>
    )
}

export default CreateFreeTime


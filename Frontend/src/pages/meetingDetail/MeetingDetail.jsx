import './MeetingDetail.scss'
import { useRef, useState } from 'react';
import APIapp from '../../components/APIapp/APIapp';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function MeetingDetail() {
    const {id} = useParams()
    const [meeting, setMeeting] = useState({
        endTime: "",
        freeTimeId: 0,
        id: 0,
        meetingDate: "",
        startTime: "",
        studentId: "",
        studentNote: "",
        teacherId: "",
        teacherNote: "",
    })
    const [student, setStudent] =useState({})
    const [teacher, setTeacher] = useState({})
    const [teacherNote, setTeacherNote] =useState([])
    const [studentNote, setStudentNote] =useState([])
    const [teacherNotePara, setTeacherNotePara] =useState("")
    const [studentNotePara, setStudentNotePara] =useState("")
    const storageKey = JSON.parse(localStorage.getItem('storageKey'))

    useEffect(()=>{
        const fetchData=async()=>{
            const meeting = await APIapp.get(`/meeting/${id}`)
            console.log(meeting)
            setMeeting(meeting.data)
            setTeacherNote(meeting.data.teacherNote.split('\\n'))
            setStudentNote(meeting.data.studentNote.split('\\n'))
            setTeacherNotePara(meeting.data.teacherNote.replace(/\\n/g, '\n'))
            setStudentNotePara(meeting.data.studentNote.replace(/\\n/g, '\n'))
            const student = await APIapp.get(`/student/${meeting.data.studentId}`)
            setStudent(student.data)
            const teacher = await APIapp.get(`/teacher/${meeting.data.teacherId}`)
            setTeacher(teacher.data)
        }
        fetchData()
    },[])

    const handleTeacherNote = (e)=>{
        const para = e.target.value.replace(/\n/g, '\\n')
        setMeeting({...meeting, teacherNote: para})
        setTeacherNotePara(e.target.value)
    }

    const handleStudentNote = (e)=>{
        const para = e.target.value.replace(/\n/g, '\\n')
        setMeeting({...meeting, studentNote: para})
        setStudentNotePara(e.target.value)
    }
    
    const handleUpdate= async ()=>{
        console.log(meeting)
        try{
            const update = await APIapp.put(`/meeting/${meeting.id}`, meeting)
            console.log(update)
        }catch(e){
            window.alert("Cập nhật không thành công")
        }
    }

    return(
        <div className='meeting-detail'> 
            <div className='top'>
                <div className='left'>
                    <div className='infor'>
                        <label htmlFor="">Mã cuộc họp</label>
                        <span>{meeting.id}</span>
                    </div>
                    <div className='infor'>
                        <label htmlFor="">Tên sinh viên</label>
                        <span>{student.name}</span>
                    </div>
                    <div className='infor'>
                        <label htmlFor="">Bắt đầu</label>
                        <span>{meeting.startTime}</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='infor'>
                        <label htmlFor="">Giáo viên</label>
                        <span>{teacher.name}</span>
                    </div>
                    <div className='infor'>
                        <label htmlFor="">Ngày họp</label>
                        <span>{meeting.meetingDate}</span>
                    </div>
                    <div className='infor'>
                        <label htmlFor="">Kết thúc</label>
                        <span>{meeting.endTime}</span>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <label htmlFor="">Ghi chú của giáo viên</label>
                {(storageKey.role==="STUDENT")?
                <div>
                    {teacherNote.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                    ))}
                </div>:
                <textarea name="teacherNote" cols="116" rows="6" value={teacherNotePara} onChange={handleTeacherNote}>
                </textarea>}

                <label htmlFor="">Ghi chú của sinh viên</label>
                {(storageKey.role==="TEACHER")?
                <div>
                    {studentNote.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                    ))}
                </div>:<textarea name="teacherNote" cols="116" rows="6" value={teacherNotePara} onChange={handleStudentNote}>
                </textarea>}
            </div>

            <button onClick={handleUpdate}>Cập nhật</button>
        </div>
    )
}

export default MeetingDetail
import DefaultLayout from '../layout/defaultLayout/DefaultLayout';
import BookMeeting from '../pages/bookMeeting/BookMeeting';
import CreateFreeTime from '../pages/createFreetime/CreateFreeTime';
import DashBoard from '../pages/dashboard/Dashboard';
import ListStudent from '../pages/listStudent/ListStudent';
import Login from '../pages/login/Login';
import MeetingDetail from '../pages/meetingDetail/MeetingDetail';
import StudentDetail from '../pages/studentDetail/StudentDetail';
import StudentNextMeet from '../pages/studentNextMeet/StudentNextMeet';
import TeacherDetail from '../pages/teacherDetail/TeacherDetails';
import TeacherNextMeet from '../pages/teacherNextMeet/TeacherNextMeet';

export const teacherRoutes = [
    {path: '/teacher/liststudent', element : ListStudent, layout: DefaultLayout},
    {path: '/teacher/freetime', element : CreateFreeTime, layout: DefaultLayout},
    {path: '/teacher/nextmeet', element : TeacherNextMeet, layout: DefaultLayout},
    {path: '/teacher/liststudent/:id', element : StudentDetail, layout: DefaultLayout},
    {path: '/teacher/meeting/:id', element : MeetingDetail, layout: DefaultLayout},
];
export const studentRoutes = [
    {path: '/student/meeting/:id', element : MeetingDetail, layout: DefaultLayout},
    {path: '/student/teacher', element : TeacherDetail, layout: DefaultLayout},
    {path: '/student/nextmeet', element : StudentNextMeet, layout: DefaultLayout},
    {path: '/student/bookmeeting', element : BookMeeting, layout: DefaultLayout},
];

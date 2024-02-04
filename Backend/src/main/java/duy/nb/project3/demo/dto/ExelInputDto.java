package duy.nb.project3.demo.dto;

public class ExelInputDto {
    private String classId;
    private String courseId;
    private String name;
    private String sectionType;
    private String note;
    private String studentId;
    private String studentName;
    private String email;
    private String projectName;
    private String groupName;

    public ExelInputDto() {
    }

    public ExelInputDto(String classId, String courseId, String name, String sectionType, String note, String studentId, String studentName, String email, String projectName, String groupName) {
        this.classId = classId;
        this.courseId = courseId;
        this.name = name;
        this.sectionType = sectionType;
        this.note = note;
        this.studentId = studentId;
        this.studentName = studentName;
        this.email = email;
        this.projectName = projectName;
        this.groupName = groupName;
    }

    public String getClassId() {
        return classId;
    }

    public void setClassId(String classId) {
        this.classId = classId;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSectionType() {
        return sectionType;
    }

    public void setSectionType(String sectionType) {
        this.sectionType = sectionType;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }
}

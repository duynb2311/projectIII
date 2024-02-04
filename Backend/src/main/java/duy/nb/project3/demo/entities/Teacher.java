package duy.nb.project3.demo.entities;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "teacher")
@Data
public class Teacher {
    @Id
    private String id;
    @Column
    @NotNull
    private String name;
    @Column
    @NotNull
    private String phone;
    @Column
    @NotNull
    private String email;
    @Column
    @NotNull
    private String school;

    public Teacher() {
    }

    public Teacher(String id, String name, String phone, String email, String school) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.school = school;
    }

    public Teacher(String name, String phone, String email, String school) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.school = school;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }
}

package com.backEnd.demo.Model;
import javax.persistence.*;


@Entity
@Table(name = "T_ROLES")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer PK_idRole;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private ERole name;
        
	public Role() {

	}

	public Role(ERole name) {
		this.name = name;
	}

	public Integer getId() {
		return PK_idRole;
	}

	public void setId(Integer id) {
		this.PK_idRole = id;
	}

	public ERole getName() {
		return name;
	}

	public void setName(ERole name) {
		this.name = name;
	}
}
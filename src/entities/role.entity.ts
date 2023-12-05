/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Privilege } from "./privilege.entity";
import { User } from "src/users/user.entity";

@Entity({ name: 'roles' })
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', unique: true, comment: 'Name of the role (e.g., "admin", "editor").' })
    name: string;

    @Column({ name: 'description', type: 'text', comment: 'Description of the role\'s permissions (optional).' })
    description: string;

    @ManyToMany(() => Privilege)
    @JoinTable()
    privileges: Privilege[];

    @ManyToMany(() => User, (user) => user.roles)
    users: User[];
}
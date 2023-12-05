/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";

@Entity({ name: 'privileges' })
export class Privilege {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', unique: true, comment: 'Name of the privilege (e.g., "create_user", "edit_article").' })
    name: string;

    @Column({ name: 'description', type: 'text', nullable: true, comment: 'Description of the privilege\'s function (optional).' })
    description: string;

    @ManyToMany(() => Role, (role) => role.privileges)
    roles: Role[];
}
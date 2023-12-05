/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { DEFALT_PROFILE_URI } from '../utils/common';
import { Role } from 'src/entities/role.entity';
import { AccountStatus } from '../enums/Options';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'email', unique: true, comment: 'Unique text (255 characters max) for user identification and communication.' })
  email: string;

  @Column({ name: 'password', comment: 'Hashed and salted text (255 characters max) for secure storage.' })
  password: string;
  
  @Column({ name: 'salt', comment: 'Salt used for password hashing (255 characters max).' })
  salt: string;
  
  @Column({ name: 'sha1', comment: 'SHA-1 hash of the password (255 characters max).' })
  sha1: string;
  
  @Column({ name: 'sha256', comment: 'SHA-256 hash of the password (255 characters max).' })
  sha256: string;

  @Column({ name: 'first_name', comment: 'User\'s first name (text, 255 characters max)' })
  firstName: string;

  @Column({ name: 'last_name', comment: 'User\'s last name (text, 255 characters max).' })
  lastName: string;

  @Column({ name: 'account_status', enum: AccountStatus, default: AccountStatus.ACTIVE })
  accountStatus: AccountStatus;

  @Column({ name: 'profile_picture', default: DEFALT_PROFILE_URI, comment: '(optional): Text (255 characters max) for storing profile picture URL or path.' })
  profilePicture: string;

  @Column({ name: 'bio', type: 'text', nullable: true, comment: '(optional): Text for user bio or description.' })
  bio: string;

  @Column({ name: 'country', nullable: true, comment: '(optional): User\'s country (text, 255 characters max).' })
  country: string;

  @Column({ name: 'timezone', nullable: true, comment: '(optional): User\'s preferred timezone (text, 255 characters max).' })
  timezone: string;

  @Column({ name: 'language', nullable: true, comment: '(optional): User\'s preferred language (text, 255 characters max).' })
  language: string;

  @CreateDateColumn({ name: 'created_at', comment: 'Timestamp of user creation (defaults to current time).' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', comment: 'Timestamp of last user update (defaults to current time).' })
  updatedAt: Date;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];
}

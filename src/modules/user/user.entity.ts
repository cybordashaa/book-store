import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinTable, ManyToMany, JoinColumn } from "typeorm";
import { UserDetails } from "./user.details.entity";
import { Role } from "../role/role.entity";
import { type } from "os";
@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
    username: string;

    @Column({ type: 'varchar', nullable: false })
    email: string;

    @Column({ type: 'varchar', nullable: false })
    password: string;

    @JoinColumn({ name: 'detail_id' })
    @OneToOne(type => UserDetails, { cascade: true, nullable: false, eager: true })
    details: UserDetails;

    @ManyToMany(type => Role, role => role.user)
    @JoinTable({ name: 'user_roles' })
    roles: Role[]

    @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
    status: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
}

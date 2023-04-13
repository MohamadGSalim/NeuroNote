import { ApiProperty } from "@nestjs/swagger";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column()
    @ApiProperty()
    email: string;

    @Column()
    @ApiProperty()
    username: string;

    @Column()
    password: string;

    @Column({ nullable: true, default: "" })
    @ApiProperty()
    disability_type: string;

    @Column({ nullable: true, default: null })
    @ApiProperty()
    fullname: string;

    @CreateDateColumn()
    @ApiProperty()
    created_at: Date;

    @UpdateDateColumn()
    @ApiProperty()
    updated_at: Date;
}

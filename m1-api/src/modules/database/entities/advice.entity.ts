import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
  } from 'typeorm';
  import { BookEntity } from './book.entity';
  
  export type AdviceId = string & { __brand: 'Advice' };
  
  @Entity('advices')
  export class AdviceEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: AdviceId;
  
    @ManyToOne(() => BookEntity, { nullable: false })
    @JoinColumn({ name: 'bookId' })
    book: BookEntity;
  
    @CreateDateColumn({ name: 'creationDate' })
    creationDate: Date;
  
    @Column({ type: 'text', nullable: true })
    comment?: string;
  
    @Column({ type: 'int' })
    stars: number;
  }
  
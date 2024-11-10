import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authors')
export class AuthorEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar' }) // Correction du type
  lastName: string;

  @Column({ type: 'text', nullable: true })
  biography?: string; // Champ optionnel

  @Column({ name: 'photo_path', type: 'varchar', nullable: true })
  photoPath?: string; // Champ optionnel pour le chemin de la photo
}

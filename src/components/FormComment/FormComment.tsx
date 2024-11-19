import React, { FC, useState, useCallback } from 'react';
import styles from './formComment.module.css';
import { IoIosClose } from 'react-icons/io';
import { Reviews } from '../../services/utils/types';
import { useReviewsContext } from '../../Context/ReviewsContext';
import { useModal } from '../../Context/ModalContext';

const INITIAL_REVIEWS: Reviews = {
  advantages: '',
  disadvantages: '',
  description: '',
  images: [],
};

export const FormComment: FC = () => {
  const { addReview } = useReviewsContext();
  const [activeTextarea, setActiveTextarea] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [reviews, setReviews] = useState<Reviews>(INITIAL_REVIEWS);

  // закрытие модального окна
  const { closeModal } = useModal();

  // переключение активного текстареа
  const handleToggleActive = useCallback((textarea: string | null) => {
    setActiveTextarea(textarea);
  }, []);

  // обработка изменений в текстареа
  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const keyName = name as keyof Reviews;
    // обновляем новыми значениями
    setReviews((prevReviews) => ({ ...prevReviews, [keyName]: value }));
  };

  // обработка выбора файлов
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const urls = fileArray.map((file) => URL.createObjectURL(file));
      setSelectedFiles(fileArray);
      setPreviewUrls(urls);
    }
  }, []);

  // удаляем файл
  const handleRemoveFile = useCallback((index: number) => {
    const removeFile = (prevFiles: File[]) => prevFiles.filter((_, i) => i !== index);
    const removeUrl = (prevUrls: string[]) => prevUrls.filter((_, i) => i !== index);
    setSelectedFiles(removeFile);
    setPreviewUrls(removeUrl);
  }, []);

  // отправка формы
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // добавляем новые данные
    const reviewData = { ...reviews, images: selectedFiles };
    // добавляем отзыв в контекст
    addReview(reviewData);
    // очистка формы
    setReviews(INITIAL_REVIEWS);
    setSelectedFiles([]);
    setPreviewUrls([]);
    // закрытие модального окна
    closeModal();
  };

  return (
    <div className={styles.formComment}>
      <h2 className={styles.formComment__title}>Расскажите о продукте</h2>
      <form className={styles.formComment__form} onSubmit={handleSubmit}>
        {['преимущества', 'недостатки', 'описание'].map((label, index) => (
          <label
            key={index}
            htmlFor={label.toLowerCase()}
            className={styles.formComment__form__item}
          >
            <p
              className={`${styles.formComment__form__item__label} ${
                activeTextarea === label.toLowerCase() ||
                reviews[label.toLowerCase() as keyof Reviews]?.toString() ||
                ''
                  ? styles.movedUp
                  : ''
              }`}
            >
              {label}
            </p>
            <textarea
              onBlur={() => handleToggleActive(null)}
              className={`${styles.formComment__form__item__input} ${
                activeTextarea === label.toLowerCase() ? 'active' : ''
              }`}
              maxLength={400}
              id={label.toLowerCase()}
              name={label.toLowerCase()}
              value={reviews[label.toLowerCase() as keyof Reviews]?.toString() || ''}
              onChange={handleTextareaChange}
              onFocus={() => handleToggleActive(label.toLowerCase())}
            />
            <span className={styles.formComment__form__item__line}></span>
          </label>
        ))}
        <label className={styles.formComment__form__item__file}>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            placeholder="Загрузить фото"
          />
        </label>
        <div className={styles.formComment__form__item__images}>
          {selectedFiles.map((file, index) => (
            <div key={file.name} className={styles.formComment__form__item__image}>
              <img
                src={previewUrls[index]}
                alt="Preview"
                className={styles.formComment__form__item__preview}
              />
              <IoIosClose
                onClick={() => handleRemoveFile(index)}
                size={20}
                className={styles.formComment__form__item__close}
              />
            </div>
          ))}
        </div>
        <button type="submit" className={styles.formComment__button}>
          Оставить отзыв
        </button>
      </form>
    </div>
  );
};

export default FormComment;

import { useCallback } from 'react';
import { Typography } from '../../../../components';
import { ChoiceAnswer } from '../../../../types/models';
import styles from './styles.module.scss';

export type RadioOptionProps = {
  item: ChoiceAnswer;
  name: string;
  checked: boolean;
  onSelect: (item: ChoiceAnswer) => void;
};

export function RadioOption(props: RadioOptionProps) {
  const { item, name, checked, onSelect } = props;
  const value = '' + item.value;
  const handleSelect = useCallback(() => onSelect(item), [onSelect, item]);
  const onChange = useCallback(() => {}, []);

  return (
    <Typography
      dontTranslate
      component="label"
      variant="heading-4"
      className={styles['quiz-dialog-option']}
    >
      <input
        {...{
          name,
          value,
          checked,
          onChange,
          type: 'radio',
          onClick: handleSelect,
        }}
      />
      <div
        className={styles['quiz-dialog-option-display']}
        dangerouslySetInnerHTML={{ __html: item.display }}
      />
    </Typography>
  );
}

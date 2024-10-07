type DataTypes = {
  id: string;
  title: string;
  isChecked: boolean;
  isSelected: boolean;
};
type Props = {
  className?: string;
  headerLeft?: string;
  headerRight?: string;
  inputData: string[];
  selectedInputData?: string[];
  returnValues: (data: string[]) => void;
};

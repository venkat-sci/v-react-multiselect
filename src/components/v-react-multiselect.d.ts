type DataTypes = {
  id: string;
  title: string;
  isChecked: boolean;
  isSelected: boolean;
};
type Props = {
  headerLeft?: string;
  headerRight?: string;
  inputData: string[];
  selectedInoutData?: string[];
  returnValues: (data: string[]) => void;
};

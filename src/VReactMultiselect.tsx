import { CheckedState } from '@radix-ui/react-checkbox';
import { useEffect, useState } from 'react';
import { Checkbox } from './components/ui/checkbox';
import { Label } from './components/ui/label';
import { ScrollArea } from './components/ui/scroll-area';
import { Button } from './components/ui/button';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react';
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
  returnValues: (data: string[]) => void;
};
const VReactMultiselect = ({
  headerLeft = 'Avaliable',
  headerRight = 'Selected',
  inputData = [],
  returnValues,
}: Props) => {
  const requiredData: DataTypes[] = inputData.map((item) => {
    return {
      id: crypto.randomUUID(),
      title: item,
      isChecked: false,
      isSelected: false,
    };
  });
  const [data, setData] = useState<DataTypes[]>(requiredData);
  const [isCheckedAllLeft, setIsCheckedAllLeft] = useState<boolean>(false);
  const [isCheckedAllRight, setIsCheckedAllRight] = useState<boolean>(false);
  useEffect(() => {
    console.log(
      data.filter((item) => item.isSelected).map((item) => item.title)
    );
    returnValues(
      data.filter((item) => item.isSelected).map((item) => item.title)
    );
  }, [data, returnValues]);
  const handleCheckboxChange = (event: CheckedState, side: string) => {
    if (side === 'left') {
      setIsCheckedAllLeft(event as boolean);
      setData((prev) => {
        return prev.map((item) => {
          if (side === 'left' && !item.isSelected) {
            return { ...item, isChecked: event as boolean };
          }
          return item;
        });
      });
    } else if (side === 'right') {
      setIsCheckedAllRight(event as boolean);
      setData((prev) => {
        return prev.map((item) => {
          if (side === 'right' && item.isSelected) {
            return { ...item, isChecked: event as boolean };
          }
          return item;
        });
      });
    }
  };

  const handleCheckboxChangeSingle = (isChecked: boolean, id: string) => {
    setData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: isChecked };
        }
        return item;
      });
    });
  };

  //   actions for selecting the options
  const handleSelectedSingle = () => {
    setData((prev) => {
      return prev.map((item) => {
        if (item.isChecked && !item.isSelected) {
          return { ...item, isChecked: false, isSelected: true };
        }
        return item;
      });
    });
    setIsCheckedAllLeft(false);
  };
  const handleRemoveSingle = () => {
    setData((prev) => {
      return prev.map((item) => {
        if (item.isChecked && item.isSelected) {
          return { ...item, isChecked: false, isSelected: false };
        }
        return item;
      });
    });
    setIsCheckedAllRight(false);
  };
  const handleSelectedAll = () => {
    setData((prev) => {
      return prev.map((item) => {
        if (!item.isSelected) {
          return { ...item, isChecked: false, isSelected: true };
        }
        return item;
      });
    });
    setIsCheckedAllLeft(false);
  };

  const handleRemoveAll = () => {
    setData((prev) => {
      return prev.map((item) => {
        if (item.isSelected) {
          return { ...item, isChecked: false, isSelected: false };
        }
        return item;
      });
    });
    setIsCheckedAllRight(false);
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 gap-2 min-h-52 overflow-auto">
        {/* Left section */}
        <div className="flex flex-col col-span-5 border rounded-md h-full">
          <div className="bg-slate-200 space-x-1 flex items-center h-6">
            <Checkbox
              className="ml-1"
              checked={isCheckedAllLeft}
              disabled={!(data.filter((item) => !item.isSelected).length > 0)}
              onCheckedChange={(e) => handleCheckboxChange(e, 'left')}
            />
            <Label>{headerLeft}</Label>
          </div>
          <ScrollArea className="leftmain flex-grow w-full max-h-52">
            <ul>
              {data
                .filter((item) => !item.isSelected)
                .map((item) => {
                  return (
                    <li
                      className="items-center space-x-1 hover:bg-slate-200"
                      key={item.id}
                      onClick={() =>
                        handleCheckboxChangeSingle(!item.isChecked, item.id)
                      }
                    >
                      <Checkbox className="ml-1" checked={item.isChecked} />
                      <Label>{item.title}</Label>
                    </li>
                  );
                })}
            </ul>
          </ScrollArea>
        </div>
        {/* middle action section */}
        <div className="flex flex-col col-span-1 h-full items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleSelectedSingle()}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleRemoveSingle()}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handleSelectedAll()}
          >
            <ChevronsRightIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleRemoveAll()}
          >
            <ChevronsLeftIcon className="h-4 w-4" />
          </Button>
        </div>
        {/* Right section */}

        <div className="flex flex-col col-span-5 border rounded-md h-full">
          <div className="bg-slate-200 space-x-1 flex items-center h-6">
            <Checkbox
              className="ml-1"
              checked={isCheckedAllRight}
              disabled={!(data.filter((item) => item.isSelected).length > 0)}
              onCheckedChange={(e) => handleCheckboxChange(e, 'right')}
            />
            <Label>{headerRight}</Label>
          </div>
          {data.filter((item) => item.isSelected).length > 0 && (
            <ScrollArea className="rightmain flex-grow w-full max-h-52">
              <ul>
                {data
                  .filter((item) => item.isSelected)
                  .map((item) => {
                    return (
                      <li
                        className="space-x-1 items-center hover:bg-slate-200"
                        key={item.id}
                        onClick={() =>
                          handleCheckboxChangeSingle(!item.isChecked, item.id)
                        }
                      >
                        <Checkbox className="ml-1" checked={item.isChecked} />
                        <Label>{item.title}</Label>
                      </li>
                    );
                  })}
              </ul>
            </ScrollArea>
          )}
        </div>
      </div>
    </div>
  );
};

export default VReactMultiselect;

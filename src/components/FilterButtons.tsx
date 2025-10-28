import { Button } from '@/components/ui/button';
import { FilterType } from '@/types/todo';
import { cn } from '@/lib/utils';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export default function FilterButtons({
  currentFilter,
  onFilterChange,
}: FilterButtonsProps) {
  return (
    <div className="flex gap-2">
      {filters.map(({ value, label }) => (
        <Button
          key={value}
          variant={currentFilter === value ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFilterChange(value)}
          className={cn(
            'transition-all',
            currentFilter === value && 'shadow-sm'
          )}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
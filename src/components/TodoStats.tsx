import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface TodoStatsProps {
  totalCount: number;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export default function TodoStats({
  totalCount,
  activeCount,
  completedCount,
  onClearCompleted,
}: TodoStatsProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex gap-6 text-sm">
          <div>
            <span className="text-muted-foreground">Total: </span>
            <span className="font-semibold">{totalCount}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Active: </span>
            <span className="font-semibold text-blue-600">{activeCount}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Completed: </span>
            <span className="font-semibold text-green-600">
              {completedCount}
            </span>
          </div>
        </div>
        {completedCount > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearCompleted}
            className="text-destructive hover:text-destructive"
          >
            Clear Completed
          </Button>
        )}
      </div>
    </Card>
  );
}
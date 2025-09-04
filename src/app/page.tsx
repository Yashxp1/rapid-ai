'use client';

import { Button } from '@/components/ui/button';
import { useTRPC } from '@/trpc/client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

const page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success('Background Job started');
      },
    })
  );
  return (
    <div className="p-4">
      <Button onClick={() => invoke.mutate({ text: 'John' })}>
        Invoke Background Job
      </Button>
    </div>
  );
};

export default page;

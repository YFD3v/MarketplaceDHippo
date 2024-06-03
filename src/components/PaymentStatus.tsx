"use client";

import { useCart } from "@/hooks/use-cart";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface PaymentStatusProps {
  isPaid: boolean;
  orderId: string;
  orderEmail: string;
}

const PaymentStatus = ({ orderEmail, orderId, isPaid }: PaymentStatusProps) => {
  const router = useRouter();
  const { clearCart } = useCart();
  const { data } = trpc.payment.pullOrderStatus.useQuery(
    { orderId },
    {
      enabled: isPaid === false,
      refetchInterval: (data) => (data?.isPaid ? false : 1000),
    }
  );

  useEffect(() => {
    if (data?.isPaid) router.refresh();
    clearCart();
  }, [data?.isPaid, router, clearCart]);

  return (
    <div className="mt-16 grid grid-cols-2 gap-X text-sm text-gray-600">
      <div>
        <p className="font-medium text-gray-900">Enviando para: </p>
        <p>{orderEmail}</p>
      </div>

      <div>
        <p className="font-medium text-gray-900">Status do pedido:</p>
        <p>{isPaid ? "Pagamento confirmado" : "Pagamento pendente"}</p>
      </div>
    </div>
  );
};

export default PaymentStatus;

import { useEffect, useRef, useState } from "react";
import styled from "styled-components"

interface ToastProps {
  newToast?: toast
}

interface toast {
  message: string
  type: 'error' | 'info'
}

export default function Toast({ newToast }: ToastProps) {
  const [toats, setToats] = useState<toast[]>([]);
  const timeoutRef = useRef<number | null>(null);

  function removeLastToast() {
    setToats(prev => {
      let newToast = [...prev];
      newToast.pop();
      return newToast;
    });
  }

  useEffect(() => {
    if (!newToast) return;
      setToats(prev => [...prev, newToast]);
  }, [newToast]);

  useEffect(() => {
    if (!toats.length) return;

    function clearTimeoutRef() {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    }
    clearTimeoutRef();

    timeoutRef.current = setTimeout(() => {
      removeLastToast();
    }, 1500);

    return () => {
      clearTimeoutRef();
    };
  }, [toats]);

  return <Wrapper>
    <ListToast>
      {
        toats.map((toast, index) => (
          <CardToast key={index} type={toast.type}>
            {toast.message}
          </CardToast>
        ))
      }
    </ListToast>
  </Wrapper>
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
`

const ListToast = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`

const CardToast = styled.div<{
  type: 'error' | 'info'
}>`
  padding: 5px 10px;
  border-radius: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  background-color: ${p => p.type === 'error' ? '#ae2f2f' : '#2f83ae'};
  transition: all 0.5s;

  &:first-child {
    animation: animationInitial 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @keyframes animationInitial {
    from {
      scale: 0;
    }
    to {
      scale: 1;
    }
  }
`
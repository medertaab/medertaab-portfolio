import { useEffect } from 'react';

export default function HeadComponent() {
  useEffect(() => {
    document.title = 'MEDER TAAB';
  }, []);

  return null;
}

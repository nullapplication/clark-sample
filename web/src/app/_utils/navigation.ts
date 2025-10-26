import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams } from 'next/navigation';

const addUrlKey = (
   router: AppRouterInstance,
   searchParams: ReadonlyURLSearchParams,
   key: string,
   value: string,
) => {
   const params = new URLSearchParams(searchParams.toString());
   params.set(key, value);

   const newPath = `${window.location.pathname}?${params.toString()}`;
   router.replace(newPath);
};

const removeUrlKey = (
   router: AppRouterInstance,
   searchParams: ReadonlyURLSearchParams,
   key: string,
) => {
   const params = new URLSearchParams(searchParams.toString());
   params.delete(key);

   const newPath = `${window.location.pathname}?${params.toString()}`;
   console.log('new path', newPath);
   router.replace(newPath);
};

const removeUrlKeys = (
   router: AppRouterInstance,
   searchParams: ReadonlyURLSearchParams,
   keys: string[],
) => {
   const params = new URLSearchParams(searchParams.toString());
   keys.forEach((key) => {
      params.delete(key);
   });
   const newPath = `${window.location.pathname}?${params.toString()}`;
   router.replace(newPath);
};

export { addUrlKey, removeUrlKey, removeUrlKeys };

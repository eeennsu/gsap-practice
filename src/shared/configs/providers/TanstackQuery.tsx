// 'use client';

// import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { ReactNode } from 'react';

// import utilQueryClient from '@utils/utilQueryClient';

// const makeQueryClient = () => utilQueryClient();

// let browserQueryClient: QueryClient | undefined = undefined;

// export const getQueryClient = () => {
//   if (isServer) {
//     return makeQueryClient();
//   } else {
//     if (!browserQueryClient) browserQueryClient = makeQueryClient();
//     return browserQueryClient;
//   }
// };

// const TanstackQueryProvider = ({ children }: { children: ReactNode }) => {
//   const queryClient = getQueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default TanstackQueryProvider;

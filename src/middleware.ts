
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { NextRequestWithAuth } from 'next-auth/middleware';
import { JwtPayload, jwtDecode } from 'jwt-decode';

interface roleJwt extends JwtPayload {
  role: string;

}
export function middleware(request: NextRequestWithAuth) {
    // const token = localStorage.getItem("token");
    // if (token) {
    //     const decodeToken = jwtDecode(token) as roleJwt;
    //     console.log(decodeToken)
    // }
//   const currentRole = cookies().get('rl'); 
//   if (
//     !access_token?.value &&
//     (request.nextUrl.pathname.startsWith('/customer') ||
//     request.nextUrl.pathname.startsWith('/admin') ||
//     request.nextUrl.pathname.startsWith('/shopOwner'))
//   ) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   };
//   if (request.nextUrl.pathname.startsWith('/admin') && currentRole?.value != roleNameSecret.ql && access_token?.value) {
//     return NextResponse.redirect(new URL('/403', request.url));
//   };
//   if (request.nextUrl.pathname.startsWith('/creator') && currentRole?.value != roleNameSecret.pt && access_token?.value) {
//     return NextResponse.redirect(new URL('/403', request.url));
//   };
//   if (request.nextUrl.pathname.startsWith('/customer') && currentRole?.value != roleNameSecret.cs && access_token?.value) {
//     return NextResponse.redirect(new URL('/403', request.url));
//   };
//   if (!request.nextUrl.pathname.startsWith('/admin') && currentRole?.value === roleNameSecret.ql && access_token?.value) {
//     return NextResponse.redirect(new URL('/admin/dashboard', request.url));
//   };
//   if ((request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup')) && access_token?.value) {
//     switch (currentRole?.value) {
//       case roleNameSecret.ql: {
//         return NextResponse.redirect(new URL('/admin/dashboard', request.url));
//       };
//       case roleNameSecret.pt: {
//         return NextResponse.redirect(new URL('/creator/profile', request.url));
//       };
//       default: {
//         return NextResponse.redirect(new URL('/', request.url));
//       };
//     };
//   };
};

// export const config = {
//   matcher: ['/admin/:path*', '/creator/:path*', '/customer/:path*', '/login', '/signup', '/'],
// };
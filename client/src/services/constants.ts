// URLs for various API endpoints
export const API_ENDPOINTS = {
  register:'/auth/register',
  login: '/auth/login',
  bookAppointment: '/patient/bookappointment',
  sendContactMessage: '/patient/contact',
  getAppointment: '/patient/getappointment',
  getAppointments: '/admin/getappointments',
  updateAppointmentStatus: (id: string) => `/admin/updateappointment/${id}`,
  getPosts: '/posts',
  createPost: '/posts',
  likePost: (postId: string) => `/posts/${postId}/like`,
  commentOnPost: (postId: string) => `/posts/${postId}/comment`,
};

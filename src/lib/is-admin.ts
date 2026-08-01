export function isAdmin(email: string | null | undefined): boolean {
  if (!email) return false;
  return email.toLowerCase() === process.env.ADMIN_EMAIL?.toLowerCase();
}
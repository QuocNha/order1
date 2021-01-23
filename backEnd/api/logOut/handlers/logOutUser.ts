import { serialize } from 'cookie'
const logOutUser = ({  
    res,
    body: { redirectTo },})=>{
// Remove the cookie
res.setHeader(
    'Set-Cookie',
    serialize('user-token', '', { maxAge: -1, path: '/' })
)

// Only allow redirects to a relative URL
if (redirectTo?.startsWith('/')) {
    res.redirect(redirectTo)
} else {
    res.status(200).json({ data: null })
}
}
export default logOutUser;
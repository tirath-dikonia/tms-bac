import jwt from "jsonwebtoken";
const jwtSecret = process.env.SECRET_KEY;
interface JwtPayload {
    id: string;
}

function decodeToken(token: string) {
    return jwt.decode(token.replace("Bearer ", "")) as JwtPayload;
}

function getJWTToken(data: JwtPayload) {
    const token = `Bearer ${jwt.sign(data, jwtSecret)}`;
    return token;
}+

function getJWTTokenForBid(data: any) {
    const token = `Bearer ${jwt.sign(data, jwtSecret)}`;
    return token;
}

function verifyJWTToken(token: any) {
    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), jwtSecret);
        return decoded;
    } catch (err) {
        return null;
    }
}

export { decodeToken, getJWTToken, getJWTTokenForBid, verifyJWTToken };

import { UpdateUserDto } from "../dto/update-user.dto";

export type UserFindOptions = Omit<UpdateUserDto, 'password'>;

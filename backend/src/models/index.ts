import { User} from './User.entity';
import { AuditLogs } from './AuditLogs.entity';
import { Department } from './Department.entity';
import { ModuleMaster } from './ModuleMaster.entity';
import { Otp } from './Otp.entity';
import { Role } from './Role.entity';
import { RoleModule } from './RoleModuleMapping.entity';

export const MODELS = [
    User,
    AuditLogs,
    Department,
    ModuleMaster,
    Otp,
    Role,
    RoleModule
];

export const ModelObj = {
    User,
    AuditLogs,
    Department,
    ModuleMaster,
    Otp,
    Role,
    RoleModule
};
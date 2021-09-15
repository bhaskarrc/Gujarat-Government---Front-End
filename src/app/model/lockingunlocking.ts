
export class LockingUnlockingList {
    position: number;
    finyear:string;
    grnNumaber: number;
    dateGrn: string;
    refNO: string;
    refDate: string;
    attachFile: string;
    action: boolean;
}
export class LockingUnlocking {
    finYear: number;
    grNotification?: string;
    grNotificationDate: string;
}
export class LockingUnlockingTime {
    position: number;
    name: string;
    date: string;
}

export class Attachment {
    name?: string;
    file?: string;
}
import { Component, OnInit } from '@angular/core';

export const MODULE_SUBMODULE_DATA = [
    {
        taskID: 1,
        taskName: 'Budget',
        subtasks: [
            { taskID: 2, taskName: 'Standing charges' },
            { taskID: 3, taskName: 'New Item Estimates' },
            { taskID: 4, taskName: 'Item Continuous Estimates' },
            { taskID: 5, taskName: 'New Works Estimates' },
            { taskID: 6, taskName: 'Work-in-progress' },
            { taskID: 7, taskName: 'Revised Expenditure Estimates' }
        ]
    },
    {
        taskID: 6,
        taskName: 'Grant',
        subtasks: [
            { taskID: 7, taskName: 'FD To Department' },
            { taskID: 8, taskName: 'FD From Department' },
        ]
    },
    {
        taskID: 9,
        taskName: 'Pay Verification Unit',
        subtasks: [
            {
                taskID: 10,
                taskName: 'Pay Fixation Events',
                subtasks: [
                    { taskID: 11, taskName: 'Promotion'},
                    { taskID: 12, taskName: 'Reversion'},
                    { taskID: 13, taskName: 'Deemed Date'},
                    { taskID: 14, taskName: 'Promotion with Forgo'},
                    { taskID: 15, taskName: 'Change of Scale'}
                ]
            },
            {
                taskID: 16,
                taskName: 'PVU Events',
                subtasks: [
                    { taskID: 17, taskName: 'Higher Pay Scale'},
                    { taskID: 18, taskName: 'Assured Career Progression'},
                    { taskID: 19, taskName: 'Career Advancement Scheme'},
                    { taskID: 20, taskName: 'Tiku Pay'},
                    { taskID: 21, taskName: 'Shetty Pay'}
                ]
            },
        ]
    },
    {
        taskID: 22,
        taskName: 'EDP',
        subtasks: [
            { taskID: 23, taskName: 'Grant Exemption' },
            { taskID: 24, taskName: 'FD From Department' },
        ]
    },
];


export const MODULE_SUBMODULE_DATA1 = [
    {
        taskID: 1,
        taskName: 'Budget',
        subtasks: [
            { taskID: 1, taskName: 'Standing charges'}
        ]
    }
];




@Component({
    selector: 'app-grid-show',
    templateUrl: './grid-show.component.html',
    styleUrls: ['./grid-show.component.css']
})
export class GridShowComponent implements OnInit {

    public list: Object[] = [];
    public list1: Object[] = [];

    constructor() { }

    ngOnInit() {
        this.list = MODULE_SUBMODULE_DATA;
        this.list1 = MODULE_SUBMODULE_DATA1;
    }

}

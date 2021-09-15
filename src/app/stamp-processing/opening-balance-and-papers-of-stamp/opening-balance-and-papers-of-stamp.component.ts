import { CommonListing } from 'src/app/model/common-listing';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { stampProcessMessage } from 'src/app/common/error-message/common-message.constants';
import { ElementOpenBalance, ElementOpenBalance1, ElementOpenBalance1Final } from 'src/app/model/stamp-processing';

// Listing table data
const ELEMENT_DATA: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
];

const ELEMENT_DATA2: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
];
const ELEMENT_DATA3: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_DATA4: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '10',
    fromSeries: '',
    toSeries: '',

    unitVal: '10',
    stampEachSheet: '1',
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '20',
    fromSeries: '',
    toSeries: '',

    unitVal: '20',
    stampEachSheet: '1',
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '50',
    fromSeries: '',
    toSeries: '',

    unitVal: '50',
    stampEachSheet: '1',
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '100',
    fromSeries: '',
    toSeries: '',

    unitVal: '100',
    stampEachSheet: '1',
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_DATA5: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_DATA6: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_DATA7: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_DATA8: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '10',
    fromSeries: '',
    toSeries: '',

    unitVal: '10',
    stampEachSheet: '1',
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '20',
    fromSeries: '',
    toSeries: '',

    unitVal: '20',
    stampEachSheet: '1',
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '50',
    fromSeries: '',
    toSeries: '',

    unitVal: '50',
    stampEachSheet: '1',
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '100',
    fromSeries: '',
    toSeries: '',

    unitVal: '100',
    stampEachSheet: '1',
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_DATA9: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_DATA10: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_DATA11: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_DATA12: ElementOpenBalance1[] = [
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '1',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '2',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
  {
    checkbox: false,
    deno: '5',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '',
    label: '',
    amount: 0,
    displayedColumns: '',
  },
];

// Final Table Data
const ELEMENT_FINAL: ElementOpenBalance1Final[] = [
  {
    deno: '1',
    stampType: 'Agency License',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '20',
    label: '30',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '1',
    stampType: 'Agency License',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '20',
    label: '30',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '2',
    stampType: 'Agency License',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '20',
    label: '30',
    amount: 0,
    displayedColumns: '',
  },
];

const ELEMENT_FINAL2: ElementOpenBalance1Final[] = [
  {
    deno: '1',
    stampType: 'Agreement',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '20',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '1',
    stampType: 'Agreement',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '20',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '2',
    stampType: 'Agreement',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '20',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
];
const ELEMENT_FINAL3: ElementOpenBalance1Final[] = [
  {
    deno: '1',
    stampType: 'Court Fee Label',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '20',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '1',
    stampType: 'Court Fee Label',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '20',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '2',
    stampType: 'Court Fee Label',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '5',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '5',
    stampType: 'Court Fee Label',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '5',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_FINAL4: ElementOpenBalance1Final[] = [
  {
    deno: '10',
    stampType: 'Court Fee Paper',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10',
    stampEachSheet: '1',
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '-',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '20',
    stampType: 'Court Fee Paper',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '20',
    stampEachSheet: '1',
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '-',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '50',
    stampType: 'Court Fee Paper',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '50',
    stampEachSheet: '1',
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '-',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '100',
    stampType: 'Court Fee Paper',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '100',
    stampEachSheet: '1',
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '-',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_FINAL5: ElementOpenBalance1Final[] = [
  {
    deno: '1',
    stampType: 'Foreign bill',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '30',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '1',
    stampType: 'Foreign bill',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '30',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '2',
    stampType: 'Foreign bill',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '30',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_FINAL6: ElementOpenBalance1Final[] = [
  {
    deno: '1',
    stampType: 'Hundi',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '30',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '1',
    stampType: 'Hundi',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '6',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '5',
    stampType: 'Hundi',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '6',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_FINAL7: ElementOpenBalance1Final[] = [
  {
    deno: '1',
    stampType: 'Insurance',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '6',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '2',
    stampType: 'Insurance',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '6',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '5',
    stampType: 'Insurance',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '6',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_FINAL8: ElementOpenBalance1Final[] = [
  {
    deno: '10',
    stampType: 'Non Judicial Paper',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '10',
    stampEachSheet: '1',
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '-',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '50',
    stampType: 'Non Judicial Paper',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '50',
    stampEachSheet: '1',
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '-',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '100',
    stampType: 'Non Judicial Paper',
    fromSeries: 'A-000001',
    toSeries: 'A-000100',

    unitVal: '100',
    stampEachSheet: '1',
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '-',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_FINAL9: ElementOpenBalance1Final[] = [
  {
    deno: '1',
    stampType: 'NotaryNotary',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '10',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '1',
    stampType: 'Notary',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '10',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '5',
    stampType: 'Notary',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '10',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_FINAL10: ElementOpenBalance1Final[] = [
  {
    stampType: 'Revenue',
    deno: '1',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '10',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '1',
    stampType: 'Revenue',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '10',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_FINAL11: ElementOpenBalance1Final[] = [
  {
    deno: '2',
    stampType: 'Share transfer',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '10',
    label: '10',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '5',
    stampType: 'Share transfer',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '10.140',
    stampEachSheet: 0,
    labelPerSheet: '140',
    qtyRequired: 0,
    totalSheet: '10',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
]; const ELEMENT_FINAL12: ElementOpenBalance1Final[] = [
  {
    deno: '1',
    stampType: 'Special Adhesive',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '1.180',
    stampEachSheet: 180,
    labelPerSheet: '180',
    qtyRequired: 0,
    totalSheet: '10',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '1',
    stampType: 'Special Adhesive',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '2.220',
    stampEachSheet: 0,
    labelPerSheet: '220',
    qtyRequired: 0,
    totalSheet: '10',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
  {
    deno: '2',
    stampType: 'Special Adhesive',
    fromSeries: '-',
    toSeries: '-',

    unitVal: '5.120',
    stampEachSheet: 0,
    labelPerSheet: '120',
    qtyRequired: 0,
    totalSheet: '10',
    label: '20',
    amount: 0,
    displayedColumns: '',
  },
];


@Component({
  selector: 'app-opening-balance-and-papers-of-stamp',
  templateUrl: './opening-balance-and-papers-of-stamp.component.html',
  styleUrls: ['./opening-balance-and-papers-of-stamp.component.css']
})
export class OpeningBalanceAndPapersOfStampComponent implements OnInit {
  // Entry Field Details
  finYear_list: CommonListing[] = [
    { value: '1', viewValue: '2011-2012' },
    { value: '2', viewValue: '2012-2013' },
    { value: '3', viewValue: '2013-2014' },
    { value: '4', viewValue: '2014-2015' },
    { value: '5', viewValue: '2015-2016' },
    { value: '6', viewValue: '2016-2017' },
    { value: '7', viewValue: '2017-2018' },
    { value: '8', viewValue: '2018-2019' },
    { value: '9', viewValue: '2019-2020' },
    { value: '10', viewValue: '2020-2021' },
  ];
  stamp_List: CommonListing[] = [
    { value: '1', viewValue: 'Agency License' },
    { value: '2', viewValue: 'Agreement' },
    { value: '3', viewValue: 'Court Fee Label' },
    { value: '4', viewValue: 'Court Fee Paper' },
    { value: '5', viewValue: 'Foreign bill' },
    { value: '6', viewValue: 'Hundi' },
    { value: '7', viewValue: 'Insurance' },
    { value: '8', viewValue: 'Non Judicial Paper' },
    { value: '9', viewValue: 'Notary' },
    { value: '10', viewValue: 'Revenue' },
    { value: '11', viewValue: 'Share transfer' },
    { value: '12', viewValue: 'Special Adhesive' },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
  dataSource4 = new MatTableDataSource(ELEMENT_DATA4);
  dataSource5 = new MatTableDataSource(ELEMENT_DATA5);
  dataSource6 = new MatTableDataSource(ELEMENT_DATA6);
  dataSource7 = new MatTableDataSource(ELEMENT_DATA7);
  dataSource8 = new MatTableDataSource(ELEMENT_DATA8);
  dataSource9 = new MatTableDataSource(ELEMENT_DATA9);
  dataSource10 = new MatTableDataSource(ELEMENT_DATA10);
  dataSource11 = new MatTableDataSource(ELEMENT_DATA11);
  dataSource12 = new MatTableDataSource(ELEMENT_DATA12);
  // Final Tables
  // Agency License
  dataSourceFinal1 = new MatTableDataSource(ELEMENT_FINAL);
  // Agreement
  dataSourceFinal2 = new MatTableDataSource(ELEMENT_FINAL2);
  // Court Fee Label
  dataSourceFinal3 = new MatTableDataSource(ELEMENT_FINAL3);
  // Court Fee Paper
  dataSourceFinal4 = new MatTableDataSource(ELEMENT_FINAL4);
  // Foreign bill
  dataSourceFinal5 = new MatTableDataSource(ELEMENT_FINAL5);
  // Hundi
  dataSourceFinal6 = new MatTableDataSource(ELEMENT_FINAL6);
  // Insurance
  dataSourceFinal7 = new MatTableDataSource(ELEMENT_FINAL7);
  // Non Judicial Paper
  dataSourceFinal8 = new MatTableDataSource(ELEMENT_FINAL8);
  // Notary
  dataSourceFinal9 = new MatTableDataSource(ELEMENT_FINAL9);
  // Revenue
  dataSourceFinal10 = new MatTableDataSource(ELEMENT_FINAL10);
  // Share transfer
  dataSourceFinal11 = new MatTableDataSource(ELEMENT_FINAL11);
  // Special Adhesive
  dataSourceFinal12 = new MatTableDataSource(ELEMENT_FINAL12);

  // For Court Fee Paper and Non Judicial Paper
  displayedColumnsWithStamps: string[] = ['position', 'checkbox', 'denomination', 'unitVal', 'stampEachSheet', 'label',
    'fromSeries', 'toSeries', 'qtyRequired', 'amount', 'action'];

  // displayedColumns: string[] = ['position', 'checkbox', 'denomination', 'unitVal',
  //   'labelPerSheet', 'totalSheet', 'label', 'qtyRequired', 'amount', 'action'];

  displayedColumns: string[] = ['position', 'checkbox', 'denomination', 'unitVal',
    'labelPerSheet', 'totalSheet', 'label', 'qtyRequired', 'amount'];

  displayedColumnsNew: string[] = ['position', 'stampType', 'denomination', 'unitVal',
    'labelPerSheet', 'totalSheet', 'label', 'fromSeries', 'toSeries', 'qtyRequired', 'amount', 'action'];
  displayedColumnsWithStampsNew: string[] = ['position', 'stampType', 'denomination', 'unitVal', 'stampEachSheet', 'totalSheet', 'label',
    'fromSeries', 'toSeries', 'qtyRequired', 'amount', 'action'];

  displayedColumnsFirst: any[] = [];
  displayedColumnsFinal: any[] = [];

  finYearCtrl: FormControl = new FormControl();
  stampCtrl: FormControl = new FormControl();
  errorMessages = stampProcessMessage;
  date: any = new Date();
  stampForm: FormGroup;


  stampVal: string;

  // Agency License
  onAdd = false;
  // Agreement
  onAdd2 = false;
  // Court Fee Label
  onAdd3 = false;
  // Court Fee Paper
  onAdd4 = false;
  // Foreign bill
  onAdd5 = false;
  // Hundi
  onAdd6 = false;
  // Insurance
  onAdd7 = false;
  // Non Judicial Paper
  onAdd8 = false;
  // Notary
  onAdd9 = false;
  // Revenue
  onAdd10 = false;
  // Share transfer
  onAdd11 = false;
  // Special Adhesive
  onAdd12 = false;

  // Agency License
  onCheck = false;
  // Agreement
  onCheck2 = false;
  // Court Fee Label
  onCheck3 = false;
  // Court Fee Paper
  onCheck4 = false;
  // Foreign bill
  onCheck5 = false;
  // Hundi
  onCheck6 = false;
  // Insurance
  onCheck7 = false;
  // Non Judicial Paper
  onCheck8 = false;
  // Notary
  onCheck9 = false;
  // Revenue
  onCheck10 = false;
  // Share transfer
  onCheck11 = false;
  // Special Adhesive
  onCheck12 = false;
  showSubTre = false;

  // Table
  tables: any[] = [];
  dataSourceStamp: any;
  stampName: string;
  dataSourceFinalHeading = [];


  constructor(private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stampForm = this.fb.group({
      finYear: ['2020-2021', Validators.required],
      openingStk: ['', Validators.required],
      stamp: ['', Validators.required],
      openQty: ['', Validators.required],
      deno: ['25000'],
      temp1: ['Treasury Office, Gandhinagar', Validators.required],
    });
  }
  // Change data source on stamp value change
  changeStamp() {
    const stampNumber = this.stampForm.controls.stamp.value;
    if (stampNumber === '1') {
      this.stampName = 'Agency License';
      this.dataSourceStamp = this.dataSource;
      this.displayedColumnsFirst = this.displayedColumns;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    } else if (stampNumber === '2') {
      this.stampName = 'Agreement';
      this.dataSourceStamp = this.dataSource2;
      this.displayedColumnsFirst = this.displayedColumns;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    } else if (stampNumber === '3') {
      this.stampName = 'Court Fee Label';
      this.dataSourceStamp = this.dataSource3;
      this.displayedColumnsFirst = this.displayedColumns;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    } else if (stampNumber === '4') {
      this.stampName = 'Court Fee Paper';
      this.dataSourceStamp = this.dataSource4;
      this.displayedColumnsFirst = this.displayedColumnsWithStamps;
      this.displayedColumnsFinal = this.displayedColumnsWithStampsNew;
    } else if (stampNumber === '5') {
      this.stampName = 'Foreign bill';
      this.dataSourceStamp = this.dataSource5;
      this.displayedColumnsFirst = this.displayedColumns;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    } else if (stampNumber === '6') {
      this.stampName = 'Hundi';
      this.dataSourceStamp = this.dataSource6;
      this.displayedColumnsFirst = this.displayedColumns;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    } else if (stampNumber === '7') {
      this.stampName = 'Insurance';
      this.dataSourceStamp = this.dataSource7;
      this.displayedColumnsFirst = this.displayedColumns;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    } else if (stampNumber === '8') {
      this.stampName = 'Non Judicial Paper';
      this.dataSourceStamp = this.dataSource8;
      this.displayedColumnsFirst = this.displayedColumnsWithStamps;
      this.displayedColumnsFinal = this.displayedColumnsWithStampsNew;
    } else if (stampNumber === '9') {
      this.stampName = 'Notary';
      this.dataSourceStamp = this.dataSource9;
      this.displayedColumnsFirst = this.displayedColumns;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    } else if (stampNumber === '10') {
      this.stampName = 'Revenue';
      this.dataSourceStamp = this.dataSource10;
      this.displayedColumnsFirst = this.displayedColumns;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    } else if (stampNumber === '11') {
      this.stampName = 'Share transfer';
      this.dataSourceStamp = this.dataSource11;
      this.displayedColumnsFirst = this.displayedColumns;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    } else if (stampNumber === '12') {
      this.stampName = 'Special Adhesive';
      this.dataSourceStamp = this.dataSource12;
      this.displayedColumnsFirst = this.displayedColumns;
      this.displayedColumnsFinal = this.displayedColumnsNew;
    }
  }
  // Add Button Click
  whenAddClick() {
    this.stampVal = this.stampForm.controls.stamp.value;

    if (this.stampVal === '1') {
      this.onAdd = true;
    } else if (this.stampVal === '2') {
      this.onAdd2 = true;
    } else if (this.stampVal === '3') {
      this.onAdd3 = true;
    } else if (this.stampVal === '4') {
      this.onAdd4 = true;
    } else if (this.stampVal === '5') {
      this.onAdd5 = true;
    } else if (this.stampVal === '6') {
      this.onAdd6 = true;
    } else if (this.stampVal === '7') {
      this.onAdd7 = true;
    } else if (this.stampVal === '8') {
      this.onAdd8 = true;
    } else if (this.stampVal === '9') {
      this.onAdd9 = true;
    } else if (this.stampVal === '10') {
      this.onAdd10 = true;
    } else if (this.stampVal === '11') {
      this.onAdd11 = true;
    } else if (this.stampVal === '12') {
      this.onAdd12 = true;
    }
  }
  // Check Box Selection
  checkboxValueChange(item) {
    this.stampVal = this.stampForm.controls.stamp.value;

    if (this.stampVal === '1') {
      this.onCheck = true;
    } else if (this.stampVal === '2') {
      this.onCheck2 = true;
    } else if (this.stampVal === '3') {
      this.onCheck3 = true;
    } else if (this.stampVal === '4') {
      this.onCheck4 = true;
    } else if (this.stampVal === '5') {
      this.onCheck5 = true;
    } else if (this.stampVal === '6') {
      this.onCheck6 = true;
    } else if (this.stampVal === '7') {
      this.onCheck7 = true;
    } else if (this.stampVal === '8') {
      this.onCheck8 = true;
    } else if (this.stampVal === '9') {
      this.onCheck9 = true;
    } else if (this.stampVal === '10') {
      this.onCheck10 = true;
    } else if (this.stampVal === '11') {
      this.onCheck11 = true;
    } else if (this.stampVal === '12') {
      this.onCheck12 = true;
    }
  }
  // add delete
  addRow(dataSource, index) {
    const p_data1 = {
      deno: dataSource.data[index].deno,
      fromSeries: 'A-000001',
      toSeries: 'A-000100',
      unitVal: dataSource.data[index].unitVal,
      stampEachSheet: 0,
      labelPerSheet: 0,
      qtyRequired: 0,
      totalSheet: 0,
      label: 0,
      amount: 0,
      displayedColumns: ''
    };
    dataSource.data.splice(index + 1, 0, p_data1);
    dataSource.data = dataSource.data;
  }

  deleteRow(dataSource, index) {
    dataSource.data.splice(index, 1);
    dataSource.data = dataSource.data;
  }
  // Delete
  deleteFinalTab1(index) {
    this.dataSourceFinal1.data.splice(index, 1);
    this.dataSourceFinal1 = new MatTableDataSource(this.dataSourceFinal1.data);
  }
  deleteFinalTab2(index) {
    this.dataSourceFinal2.data.splice(index, 1);
    this.dataSourceFinal2 = new MatTableDataSource(this.dataSourceFinal2.data);
  }
  deleteFinalTab3(index) {
    this.dataSourceFinal3.data.splice(index, 1);
    this.dataSourceFinal3 = new MatTableDataSource(this.dataSourceFinal3.data);
  }
  deleteFinalTab4(index) {
    this.dataSourceFinal4.data.splice(index, 1);
    this.dataSourceFinal4 = new MatTableDataSource(this.dataSourceFinal4.data);
  }
  deleteFinalTab5(index) {
    this.dataSourceFinal5.data.splice(index, 1);
    this.dataSourceFinal5 = new MatTableDataSource(this.dataSourceFinal5.data);
  }
  deleteFinalTab6(index) {
    this.dataSourceFinal6.data.splice(index, 1);
    this.dataSourceFinal6 = new MatTableDataSource(this.dataSourceFinal6.data);
  }
  deleteFinalTab7(index) {
    this.dataSourceFinal7.data.splice(index, 1);
    this.dataSourceFinal7 = new MatTableDataSource(this.dataSourceFinal7.data);
  }
  deleteFinalTab8(index) {
    this.dataSourceFinal8.data.splice(index, 1);
    this.dataSourceFinal8 = new MatTableDataSource(this.dataSourceFinal8.data);
  }
  deleteFinalTab9(index) {
    this.dataSourceFinal9.data.splice(index, 1);
    this.dataSourceFinal9 = new MatTableDataSource(this.dataSourceFinal9.data);
  }
  deleteFinalTab10(index) {
    this.dataSourceFinal10.data.splice(index, 1);
    this.dataSourceFinal10 = new MatTableDataSource(this.dataSourceFinal10.data);
  }
  deleteFinalTab11(index) {
    this.dataSourceFinal11.data.splice(index, 1);
    this.dataSourceFinal11 = new MatTableDataSource(this.dataSourceFinal11.data);
  }
  deleteFinalTab12(index) {
    this.dataSourceFinal12.data.splice(index, 1);
    this.dataSourceFinal12 = new MatTableDataSource(this.dataSourceFinal12.data);
  }


  gotoListing() {
    this.router.navigate(['./stamp-processing/opening-balance-and-papers-of-stamp-list']);
  }

  getAmount(element) {
    let amount = 0;
    amount = (
      ((Number(element['labelPerSheet']) * Number(element['totalSheet']))
        +
        (Number(element['label']))) * Number(element['deno'])
    );
    return amount;
  }

  // calculates amt for Courst Fee Paper and Non Judicial Paper Table
  getAmountForCourtFeeAndNonJudicial(element) {
    let amount = 0;
    amount = (
      (Number(element['deno']) * ((Number(element['stampEachSheet']) * Number(element['totalSheet'])) + Number(element['label'])))
    );
    return amount;
  }

  // calculates opening quantity
  getOpeningQuantity(element) {
    let amount = 0;
    amount = (
      (Number(element['labelPerSheet']) * Number(element['totalSheet']) + Number(element['label']))
    );
    // return amount;
    return amount !== 0 ? amount : '';
  }

  // calculates opening quantity Court paper and Nin Judic
  getOpeningQuantityCourtNonJudicPaper(element) {
    let amount = 0;
    amount = (
      ((Number(element['stampEachSheet']) * Number(element['totalSheet'])) + Number(element['label']))
    );
    // return amount;
    return amount !== 0 ? amount : '';
  }

}

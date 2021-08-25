import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Option } from 'app/interfaces/option.interface';
import { FieldType } from 'app/pages/common/entity/entity-form/components/dynamic-field/dynamic-field.directive';
import { RelationGroup } from './field-relation.interface';

export enum UnitType {
  Duration = 'duration',
  Size = 'size',
}

export interface InputUnitConfig {
  type: UnitType;
  decimal?: boolean;
  default?: string;
  allowUnits?: string[];
}

export interface BaseFieldConfig<P = any> {
  asyncValidation?: AsyncValidatorFn | AsyncValidatorFn[];
  blurEvent?: (parent: P) => void;
  blurStatus?: boolean;
  class?: string;
  disabled?: boolean;
  errors?: string;
  hasErrors?: boolean;
  hideErrMsg?: boolean;
  hint?: string;
  id?: string;
  initial?: string;
  initialCount?: number;
  isHidden?: boolean;
  isLoading?: boolean;
  name: string;
  parent?: P;
  placeholder?: string;
  readonly?: boolean;
  relation?: RelationGroup[];
  required?: boolean;
  tooltip?: string;
  tooltipPosition?: string;
  type: FieldType;
  validation?: any[] | ValidatorFn | ValidatorFn[];
  value?: any;
  warnings?: string;
  width?: string;
  zeroStateMessage?: string;
}

export interface FormArrayConfig<P = any> extends BaseFieldConfig<P> {
  formarray?: any;
}

export interface FormButtonConfig<P = any> extends BaseFieldConfig<P> {
  buttonClass: string;
  buttonColor: string;
  customEventActionLabel?: string;
  customEventMethod?(data: any): void;
}

export interface FormCheckboxConfig<P = any> extends BaseFieldConfig<P> {
  expandedHeight?: boolean;
  onChange?(data: any): void;
  updater?: any;
}

export interface FormChipConfig<P = any> extends BaseFieldConfig<P> {
  autocomplete?: boolean;
  options?: any[];
  searchOptions?: Option[];
  updateLocal?: boolean;
  updater?: any;
}

export interface FormComboboxConfig<P = any> extends BaseFieldConfig<P> {
  enableTextWrapForOptions?: boolean;
  inlineFields?: boolean;
  inlineFieldFlex?: string;
  loadMoreOptions?: any;
  options?: any[];
  searchable?: boolean;
  searchOptions?: Option[];
  updateLocal?: boolean;
  updater?: any;
}

export interface FormDictConfig<P = any> extends BaseFieldConfig<P> {
  label?: string;
  subFields?: FieldConfig[];
}

export interface FormExplorerConfig<P = any> extends BaseFieldConfig<P> {
  customTemplateStringOptions?: any;
  explorerParam?: any;
  explorerType?: string;
  fileLocation?: string;
  hideDirs?: string;
  multiple?: boolean;
  rootSelectable?: boolean;
  tristate?: boolean;
}

export interface FormInputConfig<P = any> extends BaseFieldConfig<P> {
  fileType: string;
  hideButton?: boolean;
  inputType?: string;
  inputUnit?: InputUnitConfig;
  isDoubleConfirm?: boolean;
  label?: string;
  maskValue?: any;
  max?: number;
  min?: number;
  searchable?: boolean;
  togglePw?: boolean;
}

export interface FormIpWithNetmaskConfig<P = any> extends BaseFieldConfig<P> {
  netmaskPreset?: number;
}

export interface FormListConfig<P = any> extends BaseFieldConfig<P> {
  addInitialList?: boolean;
  box?: boolean;
  label?: string;
  listFields?: FieldConfig[][];
  templateListField?: FieldConfig[];
}

export interface FormParagraphConfig<P = any> extends BaseFieldConfig<P> {
  isLargeText?: boolean;
  paragraphIcon?: string;
  paragraphIconSize?: string;
  paraText?: any;
}

export interface FormPermissionsConfig<P = any> extends BaseFieldConfig<P> {
  hideOthersPermissions?: boolean;
}

export interface FormRadioConfig<P = any> extends BaseFieldConfig<P>{
  inlineFields?: boolean;
  inlineFieldFlex?: string;
  onChange?(data: any): void;
  options?: any[];
}

export interface FormSchedulerConfig<P = any> extends BaseFieldConfig<P> {
  options?: any[];
  noMinutes?: boolean;
  onChangeOption?(data: any): void;
}

export interface FormSelectConfig<P = any> extends BaseFieldConfig<P> {
  alert?: { message: string; forValues: any[] };
  enableTextWrapForOptions?: boolean;
  fileLocation?: string;
  inlineLabel?: string;
  multiple?: boolean;
  onChangeOption?(data: any): void;
  options?: any[];
}

export interface FormSelectionListConfig<P = any> extends BaseFieldConfig<P> {
  inlineFields?: boolean;
  inlineFieldFlex?: string;
  onChange?(data: any): void;
}

export interface FormSliderConfig<P = any> extends BaseFieldConfig<P> {
  max?: number;
  min?: number;
}

export interface FormTaskConfig<P = any> extends BaseFieldConfig<P> {
  tabs?: any[];
  tabName?: string;
}

export interface FormTextareaConfig<P = any> extends BaseFieldConfig<P> {
  filereader?: boolean;
  fileType: string;
  textAreaRows?: number;
}

export interface FormTextareaButtonConfig<P = any> extends BaseFieldConfig<P> {
  customEventActionLabel?: string;
  customEventMethod?(data: any): void;
}

export interface FormUploadConfig<P = any> extends BaseFieldConfig<P> {
  acceptedFiles?: string;
  fileLocation?: string;
  hideButton?: boolean;
  message?: any;
  rootSelectable?: boolean;
  updater?: any;
}

export interface FormToggleButtonConfig<P = any> extends BaseFieldConfig<P> {
  options?: any[];
}

export type FieldConfig<P = any> = BaseFieldConfig<P>
| FormArrayConfig<P>
| FormButtonConfig<P>
| FormCheckboxConfig<P>
| FormChipConfig<P>
| FormComboboxConfig<P>
| FormDictConfig<P>
| FormExplorerConfig<P>
| FormInputConfig<P>
| FormIpWithNetmaskConfig<P>
| FormListConfig<P>
| FormParagraphConfig<P>
| FormPermissionsConfig<P>
| FormRadioConfig<P>
| FormSchedulerConfig<P>
| FormSelectConfig<P>
| FormSelectionListConfig<P>
| FormSliderConfig<P>
| FormTaskConfig<P>
| FormTextareaConfig<P>
| FormToggleButtonConfig<P>
| FormUploadConfig<P>;

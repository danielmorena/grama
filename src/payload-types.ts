/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    proposal: Proposal;
    client: Client;
    case: Case;
    hardware: Hardware;
    software: Software;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    proposal: ProposalSelect<false> | ProposalSelect<true>;
    client: ClientSelect<false> | ClientSelect<true>;
    case: CaseSelect<false> | CaseSelect<true>;
    hardware: HardwareSelect<false> | HardwareSelect<true>;
    software: SoftwareSelect<false> | SoftwareSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "proposal".
 */
export interface Proposal {
  id: string;
  general_info: {
    title: string;
    preambule?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    client_type: 'none' | 'existing' | 'new';
    clients?:
      | {
          client?: (string | null) | Client;
          id?: string | null;
        }[]
      | null;
    requester?:
      | {
          name?: string | null;
          email?: string | null;
          whatsapp?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  /**
   * Add scope items from the product or services templates.
   */
  scope_group?: {
    scope?:
      | (
          | ScopeServiceVisualIdentity
          | ScopeServiceTechnicalProject
          | ScopeServiceWebsite
          | ScopeServiceConsultancy
          | ScopeServiceInteractiveInstallation
          | ScopeProductDigital
        )[]
      | null;
  };
  /**
   * Add an optional hardware and software rider.
   */
  rider_group?: {
    rider_description?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    rider?: (RiderHardware | RiderSoftware | RiderBundle)[] | null;
  };
  /**
   * Dates are automatically set when the proposal is sent, accepted, or rejected.
   */
  dates_group?: {
    date_sent?: string | null;
    date_accepted?: string | null;
    date_rejected?: string | null;
  };
  /**
   * This section is used to present the proposal with minibio template, and portfolio related project samples.
   */
  portfolio_group?: {
    portfolio_should_present_minibio?: boolean | null;
    portfolio_should_present_related_projects?: boolean | null;
    portfolio_presentation_items?: (string | Case)[] | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "client".
 */
export interface Client {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeServiceVisualIdentity".
 */
export interface ScopeServiceVisualIdentity {
  name?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ScopeServiceVisualIdentity';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeServiceTechnicalProject".
 */
export interface ScopeServiceTechnicalProject {
  name?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ScopeServiceTechnicalProject';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeServiceWebsite".
 */
export interface ScopeServiceWebsite {
  name?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ScopeServiceWebsite';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeServiceConsultancy".
 */
export interface ScopeServiceConsultancy {
  name?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ScopeServiceConsultancy';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeServiceInteractiveInstallation".
 */
export interface ScopeServiceInteractiveInstallation {
  name?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ScopeServiceInteractiveInstallation';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeProductDigital".
 */
export interface ScopeProductDigital {
  name?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'ScopeProductDigital';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RiderHardware".
 */
export interface RiderHardware {
  name?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'RiderHardware';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RiderSoftware".
 */
export interface RiderSoftware {
  name?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'RiderSoftware';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RiderBundle".
 */
export interface RiderBundle {
  name?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'RiderBundle';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "case".
 */
export interface Case {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hardware".
 */
export interface Hardware {
  id: string;
  hardware_info?: {
    name?: string | null;
    hardware_type?:
      | (
          | 'accessory'
          | 'actuator'
          | 'adapter'
          | 'cable'
          | 'camera'
          | 'connector'
          | 'device'
          | 'display'
          | 'projector'
          | 'peripheral'
          | 'workstation'
          | 'sensor'
        )
      | null;
    description?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    thumbnail?: (string | Media)[] | null;
    images?: (string | Media)[] | null;
  };
  /**
   * The vendor name and all vendor indentification.
   */
  hardware_vendor?: {
    vendor_name?: string | null;
    vendor_model?: string | null;
    vendor_model_serial_number?: string | null;
    vendor_model_part_number?: string | null;
    vendor_url?: string | null;
    vendor_url_support?: string | null;
  };
  hardware_specs?: {
    width?: number | null;
    height?: number | null;
    depth?: number | null;
    weight?: number | null;
    /**
     * Add aditional hardware specifications.
     */
    hardware_specs?:
      | {
          spec_name?: string | null;
          spec_defintion?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  hardware_purchase_info?: {
    quantity?: number | null;
    unit?:
      | (
          | 'unit'
          | 'piece'
          | 'pieces'
          | 'meter'
          | 'centimeter'
          | 'millimeter'
          | 'kilogram'
          | 'gram'
          | 'liter'
          | 'milliliter'
          | 'set'
          | 'pack'
        )
      | null;
    value_currency?: ('BRL' | 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CAD' | 'AUD' | 'CHF' | 'CNY') | null;
    value?: number | null;
    purchase_link?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "software".
 */
export interface Software {
  id: string;
  software_info?: {
    name?: string | null;
    version?: string | null;
    thumbnail?: (string | null) | Media;
    description?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    /**
     * describe the software specification, in generic terms, for licitation purposes
     */
    software_specification?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
  };
  software_vendor?: {
    vendor?: string | null;
    vendor_url?: string | null;
    vendor_download_link?: string | null;
  };
  purchase_info?: {
    value_currency?: ('BRL' | 'USD' | 'EUR') | null;
    value?: number | null;
    value_purchase_option?: ('free' | 'single' | 'yearly' | 'monthly') | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'proposal';
        value: string | Proposal;
      } | null)
    | ({
        relationTo: 'client';
        value: string | Client;
      } | null)
    | ({
        relationTo: 'case';
        value: string | Case;
      } | null)
    | ({
        relationTo: 'hardware';
        value: string | Hardware;
      } | null)
    | ({
        relationTo: 'software';
        value: string | Software;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "proposal_select".
 */
export interface ProposalSelect<T extends boolean = true> {
  general_info?:
    | T
    | {
        title?: T;
        preambule?: T;
        client_type?: T;
        clients?:
          | T
          | {
              client?: T;
              id?: T;
            };
        requester?:
          | T
          | {
              name?: T;
              email?: T;
              whatsapp?: T;
              id?: T;
            };
      };
  scope_group?:
    | T
    | {
        scope?:
          | T
          | {
              ScopeServiceVisualIdentity?: T | ScopeServiceVisualIdentitySelect<T>;
              ScopeServiceTechnicalProject?: T | ScopeServiceTechnicalProjectSelect<T>;
              ScopeServiceWebsite?: T | ScopeServiceWebsiteSelect<T>;
              ScopeServiceConsultancy?: T | ScopeServiceConsultancySelect<T>;
              ScopeServiceInteractiveInstallation?: T | ScopeServiceInteractiveInstallationSelect<T>;
              ScopeProductDigital?: T | ScopeProductDigitalSelect<T>;
            };
      };
  rider_group?:
    | T
    | {
        rider_description?: T;
        rider?:
          | T
          | {
              RiderHardware?: T | RiderHardwareSelect<T>;
              RiderSoftware?: T | RiderSoftwareSelect<T>;
              RiderBundle?: T | RiderBundleSelect<T>;
            };
      };
  dates_group?:
    | T
    | {
        date_sent?: T;
        date_accepted?: T;
        date_rejected?: T;
      };
  portfolio_group?:
    | T
    | {
        portfolio_should_present_minibio?: T;
        portfolio_should_present_related_projects?: T;
        portfolio_presentation_items?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeServiceVisualIdentity_select".
 */
export interface ScopeServiceVisualIdentitySelect<T extends boolean = true> {
  name?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeServiceTechnicalProject_select".
 */
export interface ScopeServiceTechnicalProjectSelect<T extends boolean = true> {
  name?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeServiceWebsite_select".
 */
export interface ScopeServiceWebsiteSelect<T extends boolean = true> {
  name?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeServiceConsultancy_select".
 */
export interface ScopeServiceConsultancySelect<T extends boolean = true> {
  name?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeServiceInteractiveInstallation_select".
 */
export interface ScopeServiceInteractiveInstallationSelect<T extends boolean = true> {
  name?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ScopeProductDigital_select".
 */
export interface ScopeProductDigitalSelect<T extends boolean = true> {
  name?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RiderHardware_select".
 */
export interface RiderHardwareSelect<T extends boolean = true> {
  name?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RiderSoftware_select".
 */
export interface RiderSoftwareSelect<T extends boolean = true> {
  name?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RiderBundle_select".
 */
export interface RiderBundleSelect<T extends boolean = true> {
  name?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "client_select".
 */
export interface ClientSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "case_select".
 */
export interface CaseSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hardware_select".
 */
export interface HardwareSelect<T extends boolean = true> {
  hardware_info?:
    | T
    | {
        name?: T;
        hardware_type?: T;
        description?: T;
        thumbnail?: T;
        images?: T;
      };
  hardware_vendor?:
    | T
    | {
        vendor_name?: T;
        vendor_model?: T;
        vendor_model_serial_number?: T;
        vendor_model_part_number?: T;
        vendor_url?: T;
        vendor_url_support?: T;
      };
  hardware_specs?:
    | T
    | {
        width?: T;
        height?: T;
        depth?: T;
        weight?: T;
        hardware_specs?:
          | T
          | {
              spec_name?: T;
              spec_defintion?: T;
              id?: T;
            };
      };
  hardware_purchase_info?:
    | T
    | {
        quantity?: T;
        unit?: T;
        value_currency?: T;
        value?: T;
        purchase_link?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "software_select".
 */
export interface SoftwareSelect<T extends boolean = true> {
  software_info?:
    | T
    | {
        name?: T;
        version?: T;
        thumbnail?: T;
        description?: T;
        software_specification?: T;
      };
  software_vendor?:
    | T
    | {
        vendor?: T;
        vendor_url?: T;
        vendor_download_link?: T;
      };
  purchase_info?:
    | T
    | {
        value_currency?: T;
        value?: T;
        value_purchase_option?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
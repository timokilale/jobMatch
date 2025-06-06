
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model JobCategory
 * 
 */
export type JobCategory = $Result.DefaultSelection<Prisma.$JobCategoryPayload>
/**
 * Model Applicant
 * 
 */
export type Applicant = $Result.DefaultSelection<Prisma.$ApplicantPayload>
/**
 * Model Employer
 * 
 */
export type Employer = $Result.DefaultSelection<Prisma.$EmployerPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model AcademicQualification
 * 
 */
export type AcademicQualification = $Result.DefaultSelection<Prisma.$AcademicQualificationPayload>
/**
 * Model WorkExperience
 * 
 */
export type WorkExperience = $Result.DefaultSelection<Prisma.$WorkExperiencePayload>
/**
 * Model LanguageProficiency
 * 
 */
export type LanguageProficiency = $Result.DefaultSelection<Prisma.$LanguageProficiencyPayload>
/**
 * Model ComputerSkill
 * 
 */
export type ComputerSkill = $Result.DefaultSelection<Prisma.$ComputerSkillPayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model MarketTrend
 * 
 */
export type MarketTrend = $Result.DefaultSelection<Prisma.$MarketTrendPayload>
/**
 * Model SkillDemand
 * 
 */
export type SkillDemand = $Result.DefaultSelection<Prisma.$SkillDemandPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  APPLICANT: 'APPLICANT',
  EMPLOYER: 'EMPLOYER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const NotificationType: {
  STATUS_CHANGE: 'STATUS_CHANGE',
  NEW_APPLICATION: 'NEW_APPLICATION',
  GENERAL: 'GENERAL'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more JobCategories
 * const jobCategories = await prisma.jobCategory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more JobCategories
   * const jobCategories = await prisma.jobCategory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.jobCategory`: Exposes CRUD operations for the **JobCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobCategories
    * const jobCategories = await prisma.jobCategory.findMany()
    * ```
    */
  get jobCategory(): Prisma.JobCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicant`: Exposes CRUD operations for the **Applicant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applicants
    * const applicants = await prisma.applicant.findMany()
    * ```
    */
  get applicant(): Prisma.ApplicantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employer`: Exposes CRUD operations for the **Employer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employers
    * const employers = await prisma.employer.findMany()
    * ```
    */
  get employer(): Prisma.EmployerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.academicQualification`: Exposes CRUD operations for the **AcademicQualification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicQualifications
    * const academicQualifications = await prisma.academicQualification.findMany()
    * ```
    */
  get academicQualification(): Prisma.AcademicQualificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workExperience`: Exposes CRUD operations for the **WorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkExperiences
    * const workExperiences = await prisma.workExperience.findMany()
    * ```
    */
  get workExperience(): Prisma.WorkExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languageProficiency`: Exposes CRUD operations for the **LanguageProficiency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LanguageProficiencies
    * const languageProficiencies = await prisma.languageProficiency.findMany()
    * ```
    */
  get languageProficiency(): Prisma.LanguageProficiencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.computerSkill`: Exposes CRUD operations for the **ComputerSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComputerSkills
    * const computerSkills = await prisma.computerSkill.findMany()
    * ```
    */
  get computerSkill(): Prisma.ComputerSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketTrend`: Exposes CRUD operations for the **MarketTrend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketTrends
    * const marketTrends = await prisma.marketTrend.findMany()
    * ```
    */
  get marketTrend(): Prisma.MarketTrendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillDemand`: Exposes CRUD operations for the **SkillDemand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillDemands
    * const skillDemands = await prisma.skillDemand.findMany()
    * ```
    */
  get skillDemand(): Prisma.SkillDemandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    JobCategory: 'JobCategory',
    Applicant: 'Applicant',
    Employer: 'Employer',
    Job: 'Job',
    Application: 'Application',
    Notification: 'Notification',
    AcademicQualification: 'AcademicQualification',
    WorkExperience: 'WorkExperience',
    LanguageProficiency: 'LanguageProficiency',
    ComputerSkill: 'ComputerSkill',
    ChatRoom: 'ChatRoom',
    ChatMessage: 'ChatMessage',
    MarketTrend: 'MarketTrend',
    SkillDemand: 'SkillDemand',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "jobCategory" | "applicant" | "employer" | "job" | "application" | "notification" | "academicQualification" | "workExperience" | "languageProficiency" | "computerSkill" | "chatRoom" | "chatMessage" | "marketTrend" | "skillDemand" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      JobCategory: {
        payload: Prisma.$JobCategoryPayload<ExtArgs>
        fields: Prisma.JobCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCategoryPayload>
          }
          findFirst: {
            args: Prisma.JobCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCategoryPayload>
          }
          findMany: {
            args: Prisma.JobCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCategoryPayload>[]
          }
          create: {
            args: Prisma.JobCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCategoryPayload>
          }
          createMany: {
            args: Prisma.JobCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCategoryPayload>
          }
          update: {
            args: Prisma.JobCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCategoryPayload>
          }
          deleteMany: {
            args: Prisma.JobCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobCategoryPayload>
          }
          aggregate: {
            args: Prisma.JobCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobCategory>
          }
          groupBy: {
            args: Prisma.JobCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<JobCategoryCountAggregateOutputType> | number
          }
        }
      }
      Applicant: {
        payload: Prisma.$ApplicantPayload<ExtArgs>
        fields: Prisma.ApplicantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          findFirst: {
            args: Prisma.ApplicantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          findMany: {
            args: Prisma.ApplicantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>[]
          }
          create: {
            args: Prisma.ApplicantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          createMany: {
            args: Prisma.ApplicantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApplicantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          update: {
            args: Prisma.ApplicantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          deleteMany: {
            args: Prisma.ApplicantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicantPayload>
          }
          aggregate: {
            args: Prisma.ApplicantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicant>
          }
          groupBy: {
            args: Prisma.ApplicantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicantCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicantCountAggregateOutputType> | number
          }
        }
      }
      Employer: {
        payload: Prisma.$EmployerPayload<ExtArgs>
        fields: Prisma.EmployerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          findFirst: {
            args: Prisma.EmployerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          findMany: {
            args: Prisma.EmployerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>[]
          }
          create: {
            args: Prisma.EmployerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          createMany: {
            args: Prisma.EmployerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          update: {
            args: Prisma.EmployerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          deleteMany: {
            args: Prisma.EmployerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          aggregate: {
            args: Prisma.EmployerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployer>
          }
          groupBy: {
            args: Prisma.EmployerGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployerCountArgs<ExtArgs>
            result: $Utils.Optional<EmployerCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      AcademicQualification: {
        payload: Prisma.$AcademicQualificationPayload<ExtArgs>
        fields: Prisma.AcademicQualificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicQualificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicQualificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicQualificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicQualificationPayload>
          }
          findFirst: {
            args: Prisma.AcademicQualificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicQualificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicQualificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicQualificationPayload>
          }
          findMany: {
            args: Prisma.AcademicQualificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicQualificationPayload>[]
          }
          create: {
            args: Prisma.AcademicQualificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicQualificationPayload>
          }
          createMany: {
            args: Prisma.AcademicQualificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AcademicQualificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicQualificationPayload>
          }
          update: {
            args: Prisma.AcademicQualificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicQualificationPayload>
          }
          deleteMany: {
            args: Prisma.AcademicQualificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicQualificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AcademicQualificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicQualificationPayload>
          }
          aggregate: {
            args: Prisma.AcademicQualificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicQualification>
          }
          groupBy: {
            args: Prisma.AcademicQualificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicQualificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicQualificationCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicQualificationCountAggregateOutputType> | number
          }
        }
      }
      WorkExperience: {
        payload: Prisma.$WorkExperiencePayload<ExtArgs>
        fields: Prisma.WorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.WorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          findMany: {
            args: Prisma.WorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>[]
          }
          create: {
            args: Prisma.WorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          createMany: {
            args: Prisma.WorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          update: {
            args: Prisma.WorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.WorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.WorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkExperience>
          }
          groupBy: {
            args: Prisma.WorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkExperienceCountAggregateOutputType> | number
          }
        }
      }
      LanguageProficiency: {
        payload: Prisma.$LanguageProficiencyPayload<ExtArgs>
        fields: Prisma.LanguageProficiencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageProficiencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageProficiencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageProficiencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageProficiencyPayload>
          }
          findFirst: {
            args: Prisma.LanguageProficiencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageProficiencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageProficiencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageProficiencyPayload>
          }
          findMany: {
            args: Prisma.LanguageProficiencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageProficiencyPayload>[]
          }
          create: {
            args: Prisma.LanguageProficiencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageProficiencyPayload>
          }
          createMany: {
            args: Prisma.LanguageProficiencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LanguageProficiencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageProficiencyPayload>
          }
          update: {
            args: Prisma.LanguageProficiencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageProficiencyPayload>
          }
          deleteMany: {
            args: Prisma.LanguageProficiencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageProficiencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguageProficiencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguageProficiencyPayload>
          }
          aggregate: {
            args: Prisma.LanguageProficiencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguageProficiency>
          }
          groupBy: {
            args: Prisma.LanguageProficiencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageProficiencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageProficiencyCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageProficiencyCountAggregateOutputType> | number
          }
        }
      }
      ComputerSkill: {
        payload: Prisma.$ComputerSkillPayload<ExtArgs>
        fields: Prisma.ComputerSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComputerSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComputerSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerSkillPayload>
          }
          findFirst: {
            args: Prisma.ComputerSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComputerSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerSkillPayload>
          }
          findMany: {
            args: Prisma.ComputerSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerSkillPayload>[]
          }
          create: {
            args: Prisma.ComputerSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerSkillPayload>
          }
          createMany: {
            args: Prisma.ComputerSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComputerSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerSkillPayload>
          }
          update: {
            args: Prisma.ComputerSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerSkillPayload>
          }
          deleteMany: {
            args: Prisma.ComputerSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComputerSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComputerSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComputerSkillPayload>
          }
          aggregate: {
            args: Prisma.ComputerSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComputerSkill>
          }
          groupBy: {
            args: Prisma.ComputerSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComputerSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComputerSkillCountArgs<ExtArgs>
            result: $Utils.Optional<ComputerSkillCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      MarketTrend: {
        payload: Prisma.$MarketTrendPayload<ExtArgs>
        fields: Prisma.MarketTrendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketTrendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTrendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketTrendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTrendPayload>
          }
          findFirst: {
            args: Prisma.MarketTrendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTrendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketTrendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTrendPayload>
          }
          findMany: {
            args: Prisma.MarketTrendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTrendPayload>[]
          }
          create: {
            args: Prisma.MarketTrendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTrendPayload>
          }
          createMany: {
            args: Prisma.MarketTrendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MarketTrendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTrendPayload>
          }
          update: {
            args: Prisma.MarketTrendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTrendPayload>
          }
          deleteMany: {
            args: Prisma.MarketTrendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketTrendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarketTrendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketTrendPayload>
          }
          aggregate: {
            args: Prisma.MarketTrendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketTrend>
          }
          groupBy: {
            args: Prisma.MarketTrendGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketTrendGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketTrendCountArgs<ExtArgs>
            result: $Utils.Optional<MarketTrendCountAggregateOutputType> | number
          }
        }
      }
      SkillDemand: {
        payload: Prisma.$SkillDemandPayload<ExtArgs>
        fields: Prisma.SkillDemandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillDemandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillDemandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillDemandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillDemandPayload>
          }
          findFirst: {
            args: Prisma.SkillDemandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillDemandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillDemandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillDemandPayload>
          }
          findMany: {
            args: Prisma.SkillDemandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillDemandPayload>[]
          }
          create: {
            args: Prisma.SkillDemandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillDemandPayload>
          }
          createMany: {
            args: Prisma.SkillDemandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkillDemandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillDemandPayload>
          }
          update: {
            args: Prisma.SkillDemandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillDemandPayload>
          }
          deleteMany: {
            args: Prisma.SkillDemandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillDemandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillDemandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillDemandPayload>
          }
          aggregate: {
            args: Prisma.SkillDemandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillDemand>
          }
          groupBy: {
            args: Prisma.SkillDemandGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillDemandGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillDemandCountArgs<ExtArgs>
            result: $Utils.Optional<SkillDemandCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    jobCategory?: JobCategoryOmit
    applicant?: ApplicantOmit
    employer?: EmployerOmit
    job?: JobOmit
    application?: ApplicationOmit
    notification?: NotificationOmit
    academicQualification?: AcademicQualificationOmit
    workExperience?: WorkExperienceOmit
    languageProficiency?: LanguageProficiencyOmit
    computerSkill?: ComputerSkillOmit
    chatRoom?: ChatRoomOmit
    chatMessage?: ChatMessageOmit
    marketTrend?: MarketTrendOmit
    skillDemand?: SkillDemandOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type JobCategoryCountOutputType
   */

  export type JobCategoryCountOutputType = {
    applicants: number
    jobs: number
  }

  export type JobCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicants?: boolean | JobCategoryCountOutputTypeCountApplicantsArgs
    jobs?: boolean | JobCategoryCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * JobCategoryCountOutputType without action
   */
  export type JobCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategoryCountOutputType
     */
    select?: JobCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCategoryCountOutputType without action
   */
  export type JobCategoryCountOutputTypeCountApplicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicantWhereInput
  }

  /**
   * JobCategoryCountOutputType without action
   */
  export type JobCategoryCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Count Type ApplicantCountOutputType
   */

  export type ApplicantCountOutputType = {
    applications: number
    qualifications: number
    experiences: number
    languages: number
    skills: number
    notifications: number
    categories: number
  }

  export type ApplicantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | ApplicantCountOutputTypeCountApplicationsArgs
    qualifications?: boolean | ApplicantCountOutputTypeCountQualificationsArgs
    experiences?: boolean | ApplicantCountOutputTypeCountExperiencesArgs
    languages?: boolean | ApplicantCountOutputTypeCountLanguagesArgs
    skills?: boolean | ApplicantCountOutputTypeCountSkillsArgs
    notifications?: boolean | ApplicantCountOutputTypeCountNotificationsArgs
    categories?: boolean | ApplicantCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicantCountOutputType
     */
    select?: ApplicantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountQualificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicQualificationWhereInput
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageProficiencyWhereInput
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComputerSkillWhereInput
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * ApplicantCountOutputType without action
   */
  export type ApplicantCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCategoryWhereInput
  }


  /**
   * Count Type EmployerCountOutputType
   */

  export type EmployerCountOutputType = {
    jobs: number
    notifications: number
  }

  export type EmployerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | EmployerCountOutputTypeCountJobsArgs
    notifications?: boolean | EmployerCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * EmployerCountOutputType without action
   */
  export type EmployerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerCountOutputType
     */
    select?: EmployerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployerCountOutputType without action
   */
  export type EmployerCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }

  /**
   * EmployerCountOutputType without action
   */
  export type EmployerCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    applications: number
    categories: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs
    categories?: boolean | JobCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCategoryWhereInput
  }


  /**
   * Count Type ApplicationCountOutputType
   */

  export type ApplicationCountOutputType = {
    notifications: number
  }

  export type ApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | ApplicationCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationCountOutputType
     */
    select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApplicationCountOutputType without action
   */
  export type ApplicationCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    messages: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatRoomCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chatRooms: number
    agentChats: number
    chatMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRooms?: boolean | UserCountOutputTypeCountChatRoomsArgs
    agentChats?: boolean | UserCountOutputTypeCountAgentChatsArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAgentChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model JobCategory
   */

  export type AggregateJobCategory = {
    _count: JobCategoryCountAggregateOutputType | null
    _avg: JobCategoryAvgAggregateOutputType | null
    _sum: JobCategorySumAggregateOutputType | null
    _min: JobCategoryMinAggregateOutputType | null
    _max: JobCategoryMaxAggregateOutputType | null
  }

  export type JobCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type JobCategorySumAggregateOutputType = {
    id: number | null
  }

  export type JobCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type JobCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type JobCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type JobCategoryAvgAggregateInputType = {
    id?: true
  }

  export type JobCategorySumAggregateInputType = {
    id?: true
  }

  export type JobCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type JobCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type JobCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type JobCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCategory to aggregate.
     */
    where?: JobCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCategories to fetch.
     */
    orderBy?: JobCategoryOrderByWithRelationInput | JobCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobCategories
    **/
    _count?: true | JobCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobCategoryMaxAggregateInputType
  }

  export type GetJobCategoryAggregateType<T extends JobCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateJobCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobCategory[P]>
      : GetScalarType<T[P], AggregateJobCategory[P]>
  }




  export type JobCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobCategoryWhereInput
    orderBy?: JobCategoryOrderByWithAggregationInput | JobCategoryOrderByWithAggregationInput[]
    by: JobCategoryScalarFieldEnum[] | JobCategoryScalarFieldEnum
    having?: JobCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCategoryCountAggregateInputType | true
    _avg?: JobCategoryAvgAggregateInputType
    _sum?: JobCategorySumAggregateInputType
    _min?: JobCategoryMinAggregateInputType
    _max?: JobCategoryMaxAggregateInputType
  }

  export type JobCategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: JobCategoryCountAggregateOutputType | null
    _avg: JobCategoryAvgAggregateOutputType | null
    _sum: JobCategorySumAggregateOutputType | null
    _min: JobCategoryMinAggregateOutputType | null
    _max: JobCategoryMaxAggregateOutputType | null
  }

  type GetJobCategoryGroupByPayload<T extends JobCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], JobCategoryGroupByOutputType[P]>
        }
      >
    >


  export type JobCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    applicants?: boolean | JobCategory$applicantsArgs<ExtArgs>
    jobs?: boolean | JobCategory$jobsArgs<ExtArgs>
    _count?: boolean | JobCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobCategory"]>



  export type JobCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type JobCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["jobCategory"]>
  export type JobCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicants?: boolean | JobCategory$applicantsArgs<ExtArgs>
    jobs?: boolean | JobCategory$jobsArgs<ExtArgs>
    _count?: boolean | JobCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JobCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobCategory"
    objects: {
      applicants: Prisma.$ApplicantPayload<ExtArgs>[]
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["jobCategory"]>
    composites: {}
  }

  type JobCategoryGetPayload<S extends boolean | null | undefined | JobCategoryDefaultArgs> = $Result.GetResult<Prisma.$JobCategoryPayload, S>

  type JobCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCategoryCountAggregateInputType | true
    }

  export interface JobCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobCategory'], meta: { name: 'JobCategory' } }
    /**
     * Find zero or one JobCategory that matches the filter.
     * @param {JobCategoryFindUniqueArgs} args - Arguments to find a JobCategory
     * @example
     * // Get one JobCategory
     * const jobCategory = await prisma.jobCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobCategoryFindUniqueArgs>(args: SelectSubset<T, JobCategoryFindUniqueArgs<ExtArgs>>): Prisma__JobCategoryClient<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobCategoryFindUniqueOrThrowArgs} args - Arguments to find a JobCategory
     * @example
     * // Get one JobCategory
     * const jobCategory = await prisma.jobCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, JobCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobCategoryClient<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCategoryFindFirstArgs} args - Arguments to find a JobCategory
     * @example
     * // Get one JobCategory
     * const jobCategory = await prisma.jobCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobCategoryFindFirstArgs>(args?: SelectSubset<T, JobCategoryFindFirstArgs<ExtArgs>>): Prisma__JobCategoryClient<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCategoryFindFirstOrThrowArgs} args - Arguments to find a JobCategory
     * @example
     * // Get one JobCategory
     * const jobCategory = await prisma.jobCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, JobCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobCategoryClient<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobCategories
     * const jobCategories = await prisma.jobCategory.findMany()
     * 
     * // Get first 10 JobCategories
     * const jobCategories = await prisma.jobCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobCategoryWithIdOnly = await prisma.jobCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobCategoryFindManyArgs>(args?: SelectSubset<T, JobCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobCategory.
     * @param {JobCategoryCreateArgs} args - Arguments to create a JobCategory.
     * @example
     * // Create one JobCategory
     * const JobCategory = await prisma.jobCategory.create({
     *   data: {
     *     // ... data to create a JobCategory
     *   }
     * })
     * 
     */
    create<T extends JobCategoryCreateArgs>(args: SelectSubset<T, JobCategoryCreateArgs<ExtArgs>>): Prisma__JobCategoryClient<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobCategories.
     * @param {JobCategoryCreateManyArgs} args - Arguments to create many JobCategories.
     * @example
     * // Create many JobCategories
     * const jobCategory = await prisma.jobCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCategoryCreateManyArgs>(args?: SelectSubset<T, JobCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobCategory.
     * @param {JobCategoryDeleteArgs} args - Arguments to delete one JobCategory.
     * @example
     * // Delete one JobCategory
     * const JobCategory = await prisma.jobCategory.delete({
     *   where: {
     *     // ... filter to delete one JobCategory
     *   }
     * })
     * 
     */
    delete<T extends JobCategoryDeleteArgs>(args: SelectSubset<T, JobCategoryDeleteArgs<ExtArgs>>): Prisma__JobCategoryClient<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobCategory.
     * @param {JobCategoryUpdateArgs} args - Arguments to update one JobCategory.
     * @example
     * // Update one JobCategory
     * const jobCategory = await prisma.jobCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobCategoryUpdateArgs>(args: SelectSubset<T, JobCategoryUpdateArgs<ExtArgs>>): Prisma__JobCategoryClient<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobCategories.
     * @param {JobCategoryDeleteManyArgs} args - Arguments to filter JobCategories to delete.
     * @example
     * // Delete a few JobCategories
     * const { count } = await prisma.jobCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobCategoryDeleteManyArgs>(args?: SelectSubset<T, JobCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobCategories
     * const jobCategory = await prisma.jobCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobCategoryUpdateManyArgs>(args: SelectSubset<T, JobCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobCategory.
     * @param {JobCategoryUpsertArgs} args - Arguments to update or create a JobCategory.
     * @example
     * // Update or create a JobCategory
     * const jobCategory = await prisma.jobCategory.upsert({
     *   create: {
     *     // ... data to create a JobCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobCategory we want to update
     *   }
     * })
     */
    upsert<T extends JobCategoryUpsertArgs>(args: SelectSubset<T, JobCategoryUpsertArgs<ExtArgs>>): Prisma__JobCategoryClient<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCategoryCountArgs} args - Arguments to filter JobCategories to count.
     * @example
     * // Count the number of JobCategories
     * const count = await prisma.jobCategory.count({
     *   where: {
     *     // ... the filter for the JobCategories we want to count
     *   }
     * })
    **/
    count<T extends JobCategoryCountArgs>(
      args?: Subset<T, JobCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobCategoryAggregateArgs>(args: Subset<T, JobCategoryAggregateArgs>): Prisma.PrismaPromise<GetJobCategoryAggregateType<T>>

    /**
     * Group by JobCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobCategoryGroupByArgs['orderBy'] }
        : { orderBy?: JobCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobCategory model
   */
  readonly fields: JobCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicants<T extends JobCategory$applicantsArgs<ExtArgs> = {}>(args?: Subset<T, JobCategory$applicantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobs<T extends JobCategory$jobsArgs<ExtArgs> = {}>(args?: Subset<T, JobCategory$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobCategory model
   */
  interface JobCategoryFieldRefs {
    readonly id: FieldRef<"JobCategory", 'Int'>
    readonly name: FieldRef<"JobCategory", 'String'>
    readonly description: FieldRef<"JobCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JobCategory findUnique
   */
  export type JobCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    /**
     * Filter, which JobCategory to fetch.
     */
    where: JobCategoryWhereUniqueInput
  }

  /**
   * JobCategory findUniqueOrThrow
   */
  export type JobCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    /**
     * Filter, which JobCategory to fetch.
     */
    where: JobCategoryWhereUniqueInput
  }

  /**
   * JobCategory findFirst
   */
  export type JobCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    /**
     * Filter, which JobCategory to fetch.
     */
    where?: JobCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCategories to fetch.
     */
    orderBy?: JobCategoryOrderByWithRelationInput | JobCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCategories.
     */
    cursor?: JobCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCategories.
     */
    distinct?: JobCategoryScalarFieldEnum | JobCategoryScalarFieldEnum[]
  }

  /**
   * JobCategory findFirstOrThrow
   */
  export type JobCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    /**
     * Filter, which JobCategory to fetch.
     */
    where?: JobCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCategories to fetch.
     */
    orderBy?: JobCategoryOrderByWithRelationInput | JobCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobCategories.
     */
    cursor?: JobCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobCategories.
     */
    distinct?: JobCategoryScalarFieldEnum | JobCategoryScalarFieldEnum[]
  }

  /**
   * JobCategory findMany
   */
  export type JobCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    /**
     * Filter, which JobCategories to fetch.
     */
    where?: JobCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobCategories to fetch.
     */
    orderBy?: JobCategoryOrderByWithRelationInput | JobCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobCategories.
     */
    cursor?: JobCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobCategories.
     */
    skip?: number
    distinct?: JobCategoryScalarFieldEnum | JobCategoryScalarFieldEnum[]
  }

  /**
   * JobCategory create
   */
  export type JobCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a JobCategory.
     */
    data: XOR<JobCategoryCreateInput, JobCategoryUncheckedCreateInput>
  }

  /**
   * JobCategory createMany
   */
  export type JobCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobCategories.
     */
    data: JobCategoryCreateManyInput | JobCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobCategory update
   */
  export type JobCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a JobCategory.
     */
    data: XOR<JobCategoryUpdateInput, JobCategoryUncheckedUpdateInput>
    /**
     * Choose, which JobCategory to update.
     */
    where: JobCategoryWhereUniqueInput
  }

  /**
   * JobCategory updateMany
   */
  export type JobCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobCategories.
     */
    data: XOR<JobCategoryUpdateManyMutationInput, JobCategoryUncheckedUpdateManyInput>
    /**
     * Filter which JobCategories to update
     */
    where?: JobCategoryWhereInput
    /**
     * Limit how many JobCategories to update.
     */
    limit?: number
  }

  /**
   * JobCategory upsert
   */
  export type JobCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the JobCategory to update in case it exists.
     */
    where: JobCategoryWhereUniqueInput
    /**
     * In case the JobCategory found by the `where` argument doesn't exist, create a new JobCategory with this data.
     */
    create: XOR<JobCategoryCreateInput, JobCategoryUncheckedCreateInput>
    /**
     * In case the JobCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobCategoryUpdateInput, JobCategoryUncheckedUpdateInput>
  }

  /**
   * JobCategory delete
   */
  export type JobCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    /**
     * Filter which JobCategory to delete.
     */
    where: JobCategoryWhereUniqueInput
  }

  /**
   * JobCategory deleteMany
   */
  export type JobCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobCategories to delete
     */
    where?: JobCategoryWhereInput
    /**
     * Limit how many JobCategories to delete.
     */
    limit?: number
  }

  /**
   * JobCategory.applicants
   */
  export type JobCategory$applicantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    where?: ApplicantWhereInput
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    cursor?: ApplicantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * JobCategory.jobs
   */
  export type JobCategory$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * JobCategory without action
   */
  export type JobCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Applicant
   */

  export type AggregateApplicant = {
    _count: ApplicantCountAggregateOutputType | null
    _avg: ApplicantAvgAggregateOutputType | null
    _sum: ApplicantSumAggregateOutputType | null
    _min: ApplicantMinAggregateOutputType | null
    _max: ApplicantMaxAggregateOutputType | null
  }

  export type ApplicantAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ApplicantSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ApplicantMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    nida: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type ApplicantMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    nida: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type ApplicantCountAggregateOutputType = {
    id: number
    fullName: number
    nida: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ApplicantAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ApplicantSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ApplicantMinAggregateInputType = {
    id?: true
    fullName?: true
    nida?: true
    userId?: true
    createdAt?: true
  }

  export type ApplicantMaxAggregateInputType = {
    id?: true
    fullName?: true
    nida?: true
    userId?: true
    createdAt?: true
  }

  export type ApplicantCountAggregateInputType = {
    id?: true
    fullName?: true
    nida?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ApplicantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applicant to aggregate.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applicants
    **/
    _count?: true | ApplicantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicantMaxAggregateInputType
  }

  export type GetApplicantAggregateType<T extends ApplicantAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicant[P]>
      : GetScalarType<T[P], AggregateApplicant[P]>
  }




  export type ApplicantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicantWhereInput
    orderBy?: ApplicantOrderByWithAggregationInput | ApplicantOrderByWithAggregationInput[]
    by: ApplicantScalarFieldEnum[] | ApplicantScalarFieldEnum
    having?: ApplicantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicantCountAggregateInputType | true
    _avg?: ApplicantAvgAggregateInputType
    _sum?: ApplicantSumAggregateInputType
    _min?: ApplicantMinAggregateInputType
    _max?: ApplicantMaxAggregateInputType
  }

  export type ApplicantGroupByOutputType = {
    id: number
    fullName: string
    nida: string
    userId: number
    createdAt: Date
    _count: ApplicantCountAggregateOutputType | null
    _avg: ApplicantAvgAggregateOutputType | null
    _sum: ApplicantSumAggregateOutputType | null
    _min: ApplicantMinAggregateOutputType | null
    _max: ApplicantMaxAggregateOutputType | null
  }

  type GetApplicantGroupByPayload<T extends ApplicantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
        }
      >
    >


  export type ApplicantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    nida?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    applications?: boolean | Applicant$applicationsArgs<ExtArgs>
    qualifications?: boolean | Applicant$qualificationsArgs<ExtArgs>
    experiences?: boolean | Applicant$experiencesArgs<ExtArgs>
    languages?: boolean | Applicant$languagesArgs<ExtArgs>
    skills?: boolean | Applicant$skillsArgs<ExtArgs>
    notifications?: boolean | Applicant$notificationsArgs<ExtArgs>
    categories?: boolean | Applicant$categoriesArgs<ExtArgs>
    _count?: boolean | ApplicantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicant"]>



  export type ApplicantSelectScalar = {
    id?: boolean
    fullName?: boolean
    nida?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ApplicantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "nida" | "userId" | "createdAt", ExtArgs["result"]["applicant"]>
  export type ApplicantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    applications?: boolean | Applicant$applicationsArgs<ExtArgs>
    qualifications?: boolean | Applicant$qualificationsArgs<ExtArgs>
    experiences?: boolean | Applicant$experiencesArgs<ExtArgs>
    languages?: boolean | Applicant$languagesArgs<ExtArgs>
    skills?: boolean | Applicant$skillsArgs<ExtArgs>
    notifications?: boolean | Applicant$notificationsArgs<ExtArgs>
    categories?: boolean | Applicant$categoriesArgs<ExtArgs>
    _count?: boolean | ApplicantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ApplicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applicant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      qualifications: Prisma.$AcademicQualificationPayload<ExtArgs>[]
      experiences: Prisma.$WorkExperiencePayload<ExtArgs>[]
      languages: Prisma.$LanguageProficiencyPayload<ExtArgs>[]
      skills: Prisma.$ComputerSkillPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      categories: Prisma.$JobCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      nida: string
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["applicant"]>
    composites: {}
  }

  type ApplicantGetPayload<S extends boolean | null | undefined | ApplicantDefaultArgs> = $Result.GetResult<Prisma.$ApplicantPayload, S>

  type ApplicantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicantCountAggregateInputType | true
    }

  export interface ApplicantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applicant'], meta: { name: 'Applicant' } }
    /**
     * Find zero or one Applicant that matches the filter.
     * @param {ApplicantFindUniqueArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicantFindUniqueArgs>(args: SelectSubset<T, ApplicantFindUniqueArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applicant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicantFindUniqueOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicantFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicantFindFirstArgs>(args?: SelectSubset<T, ApplicantFindFirstArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindFirstOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicantFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicant.findMany()
     * 
     * // Get first 10 Applicants
     * const applicants = await prisma.applicant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicantWithIdOnly = await prisma.applicant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicantFindManyArgs>(args?: SelectSubset<T, ApplicantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applicant.
     * @param {ApplicantCreateArgs} args - Arguments to create a Applicant.
     * @example
     * // Create one Applicant
     * const Applicant = await prisma.applicant.create({
     *   data: {
     *     // ... data to create a Applicant
     *   }
     * })
     * 
     */
    create<T extends ApplicantCreateArgs>(args: SelectSubset<T, ApplicantCreateArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applicants.
     * @param {ApplicantCreateManyArgs} args - Arguments to create many Applicants.
     * @example
     * // Create many Applicants
     * const applicant = await prisma.applicant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicantCreateManyArgs>(args?: SelectSubset<T, ApplicantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Applicant.
     * @param {ApplicantDeleteArgs} args - Arguments to delete one Applicant.
     * @example
     * // Delete one Applicant
     * const Applicant = await prisma.applicant.delete({
     *   where: {
     *     // ... filter to delete one Applicant
     *   }
     * })
     * 
     */
    delete<T extends ApplicantDeleteArgs>(args: SelectSubset<T, ApplicantDeleteArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applicant.
     * @param {ApplicantUpdateArgs} args - Arguments to update one Applicant.
     * @example
     * // Update one Applicant
     * const applicant = await prisma.applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicantUpdateArgs>(args: SelectSubset<T, ApplicantUpdateArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applicants.
     * @param {ApplicantDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicantDeleteManyArgs>(args?: SelectSubset<T, ApplicantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicantUpdateManyArgs>(args: SelectSubset<T, ApplicantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Applicant.
     * @param {ApplicantUpsertArgs} args - Arguments to update or create a Applicant.
     * @example
     * // Update or create a Applicant
     * const applicant = await prisma.applicant.upsert({
     *   create: {
     *     // ... data to create a Applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicant we want to update
     *   }
     * })
     */
    upsert<T extends ApplicantUpsertArgs>(args: SelectSubset<T, ApplicantUpsertArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicant.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
    **/
    count<T extends ApplicantCountArgs>(
      args?: Subset<T, ApplicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicantAggregateArgs>(args: Subset<T, ApplicantAggregateArgs>): Prisma.PrismaPromise<GetApplicantAggregateType<T>>

    /**
     * Group by Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicantGroupByArgs['orderBy'] }
        : { orderBy?: ApplicantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applicant model
   */
  readonly fields: ApplicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends Applicant$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qualifications<T extends Applicant$qualificationsArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$qualificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicQualificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experiences<T extends Applicant$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    languages<T extends Applicant$languagesArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$languagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageProficiencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends Applicant$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComputerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Applicant$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Applicant$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Applicant$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Applicant model
   */
  interface ApplicantFieldRefs {
    readonly id: FieldRef<"Applicant", 'Int'>
    readonly fullName: FieldRef<"Applicant", 'String'>
    readonly nida: FieldRef<"Applicant", 'String'>
    readonly userId: FieldRef<"Applicant", 'Int'>
    readonly createdAt: FieldRef<"Applicant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Applicant findUnique
   */
  export type ApplicantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant findUniqueOrThrow
   */
  export type ApplicantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant findFirst
   */
  export type ApplicantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant findFirstOrThrow
   */
  export type ApplicantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicant to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant findMany
   */
  export type ApplicantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter, which Applicants to fetch.
     */
    where?: ApplicantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applicants to fetch.
     */
    orderBy?: ApplicantOrderByWithRelationInput | ApplicantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applicants.
     */
    cursor?: ApplicantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applicants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applicants.
     */
    skip?: number
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[]
  }

  /**
   * Applicant create
   */
  export type ApplicantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The data needed to create a Applicant.
     */
    data: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>
  }

  /**
   * Applicant createMany
   */
  export type ApplicantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applicants.
     */
    data: ApplicantCreateManyInput | ApplicantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applicant update
   */
  export type ApplicantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The data needed to update a Applicant.
     */
    data: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>
    /**
     * Choose, which Applicant to update.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant updateMany
   */
  export type ApplicantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applicants.
     */
    data: XOR<ApplicantUpdateManyMutationInput, ApplicantUncheckedUpdateManyInput>
    /**
     * Filter which Applicants to update
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to update.
     */
    limit?: number
  }

  /**
   * Applicant upsert
   */
  export type ApplicantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * The filter to search for the Applicant to update in case it exists.
     */
    where: ApplicantWhereUniqueInput
    /**
     * In case the Applicant found by the `where` argument doesn't exist, create a new Applicant with this data.
     */
    create: XOR<ApplicantCreateInput, ApplicantUncheckedCreateInput>
    /**
     * In case the Applicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicantUpdateInput, ApplicantUncheckedUpdateInput>
  }

  /**
   * Applicant delete
   */
  export type ApplicantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    /**
     * Filter which Applicant to delete.
     */
    where: ApplicantWhereUniqueInput
  }

  /**
   * Applicant deleteMany
   */
  export type ApplicantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applicants to delete
     */
    where?: ApplicantWhereInput
    /**
     * Limit how many Applicants to delete.
     */
    limit?: number
  }

  /**
   * Applicant.applications
   */
  export type Applicant$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Applicant.qualifications
   */
  export type Applicant$qualificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
    where?: AcademicQualificationWhereInput
    orderBy?: AcademicQualificationOrderByWithRelationInput | AcademicQualificationOrderByWithRelationInput[]
    cursor?: AcademicQualificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcademicQualificationScalarFieldEnum | AcademicQualificationScalarFieldEnum[]
  }

  /**
   * Applicant.experiences
   */
  export type Applicant$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    cursor?: WorkExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * Applicant.languages
   */
  export type Applicant$languagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
    where?: LanguageProficiencyWhereInput
    orderBy?: LanguageProficiencyOrderByWithRelationInput | LanguageProficiencyOrderByWithRelationInput[]
    cursor?: LanguageProficiencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageProficiencyScalarFieldEnum | LanguageProficiencyScalarFieldEnum[]
  }

  /**
   * Applicant.skills
   */
  export type Applicant$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
    where?: ComputerSkillWhereInput
    orderBy?: ComputerSkillOrderByWithRelationInput | ComputerSkillOrderByWithRelationInput[]
    cursor?: ComputerSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComputerSkillScalarFieldEnum | ComputerSkillScalarFieldEnum[]
  }

  /**
   * Applicant.notifications
   */
  export type Applicant$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Applicant.categories
   */
  export type Applicant$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    where?: JobCategoryWhereInput
    orderBy?: JobCategoryOrderByWithRelationInput | JobCategoryOrderByWithRelationInput[]
    cursor?: JobCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobCategoryScalarFieldEnum | JobCategoryScalarFieldEnum[]
  }

  /**
   * Applicant without action
   */
  export type ApplicantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
  }


  /**
   * Model Employer
   */

  export type AggregateEmployer = {
    _count: EmployerCountAggregateOutputType | null
    _avg: EmployerAvgAggregateOutputType | null
    _sum: EmployerSumAggregateOutputType | null
    _min: EmployerMinAggregateOutputType | null
    _max: EmployerMaxAggregateOutputType | null
  }

  export type EmployerAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmployerSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmployerMinAggregateOutputType = {
    id: number | null
    companyName: string | null
    address: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type EmployerMaxAggregateOutputType = {
    id: number | null
    companyName: string | null
    address: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type EmployerCountAggregateOutputType = {
    id: number
    companyName: number
    address: number
    userId: number
    createdAt: number
    _all: number
  }


  export type EmployerAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmployerSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmployerMinAggregateInputType = {
    id?: true
    companyName?: true
    address?: true
    userId?: true
    createdAt?: true
  }

  export type EmployerMaxAggregateInputType = {
    id?: true
    companyName?: true
    address?: true
    userId?: true
    createdAt?: true
  }

  export type EmployerCountAggregateInputType = {
    id?: true
    companyName?: true
    address?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type EmployerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employer to aggregate.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employers
    **/
    _count?: true | EmployerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployerMaxAggregateInputType
  }

  export type GetEmployerAggregateType<T extends EmployerAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployer[P]>
      : GetScalarType<T[P], AggregateEmployer[P]>
  }




  export type EmployerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployerWhereInput
    orderBy?: EmployerOrderByWithAggregationInput | EmployerOrderByWithAggregationInput[]
    by: EmployerScalarFieldEnum[] | EmployerScalarFieldEnum
    having?: EmployerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployerCountAggregateInputType | true
    _avg?: EmployerAvgAggregateInputType
    _sum?: EmployerSumAggregateInputType
    _min?: EmployerMinAggregateInputType
    _max?: EmployerMaxAggregateInputType
  }

  export type EmployerGroupByOutputType = {
    id: number
    companyName: string
    address: string
    userId: number
    createdAt: Date
    _count: EmployerCountAggregateOutputType | null
    _avg: EmployerAvgAggregateOutputType | null
    _sum: EmployerSumAggregateOutputType | null
    _min: EmployerMinAggregateOutputType | null
    _max: EmployerMaxAggregateOutputType | null
  }

  type GetEmployerGroupByPayload<T extends EmployerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployerGroupByOutputType[P]>
            : GetScalarType<T[P], EmployerGroupByOutputType[P]>
        }
      >
    >


  export type EmployerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    address?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | Employer$jobsArgs<ExtArgs>
    notifications?: boolean | Employer$notificationsArgs<ExtArgs>
    _count?: boolean | EmployerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employer"]>



  export type EmployerSelectScalar = {
    id?: boolean
    companyName?: boolean
    address?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type EmployerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "address" | "userId" | "createdAt", ExtArgs["result"]["employer"]>
  export type EmployerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | Employer$jobsArgs<ExtArgs>
    notifications?: boolean | Employer$notificationsArgs<ExtArgs>
    _count?: boolean | EmployerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jobs: Prisma.$JobPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyName: string
      address: string
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["employer"]>
    composites: {}
  }

  type EmployerGetPayload<S extends boolean | null | undefined | EmployerDefaultArgs> = $Result.GetResult<Prisma.$EmployerPayload, S>

  type EmployerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployerCountAggregateInputType | true
    }

  export interface EmployerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employer'], meta: { name: 'Employer' } }
    /**
     * Find zero or one Employer that matches the filter.
     * @param {EmployerFindUniqueArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployerFindUniqueArgs>(args: SelectSubset<T, EmployerFindUniqueArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployerFindUniqueOrThrowArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployerFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerFindFirstArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployerFindFirstArgs>(args?: SelectSubset<T, EmployerFindFirstArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerFindFirstOrThrowArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployerFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployerFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employers
     * const employers = await prisma.employer.findMany()
     * 
     * // Get first 10 Employers
     * const employers = await prisma.employer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employerWithIdOnly = await prisma.employer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployerFindManyArgs>(args?: SelectSubset<T, EmployerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employer.
     * @param {EmployerCreateArgs} args - Arguments to create a Employer.
     * @example
     * // Create one Employer
     * const Employer = await prisma.employer.create({
     *   data: {
     *     // ... data to create a Employer
     *   }
     * })
     * 
     */
    create<T extends EmployerCreateArgs>(args: SelectSubset<T, EmployerCreateArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employers.
     * @param {EmployerCreateManyArgs} args - Arguments to create many Employers.
     * @example
     * // Create many Employers
     * const employer = await prisma.employer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployerCreateManyArgs>(args?: SelectSubset<T, EmployerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employer.
     * @param {EmployerDeleteArgs} args - Arguments to delete one Employer.
     * @example
     * // Delete one Employer
     * const Employer = await prisma.employer.delete({
     *   where: {
     *     // ... filter to delete one Employer
     *   }
     * })
     * 
     */
    delete<T extends EmployerDeleteArgs>(args: SelectSubset<T, EmployerDeleteArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employer.
     * @param {EmployerUpdateArgs} args - Arguments to update one Employer.
     * @example
     * // Update one Employer
     * const employer = await prisma.employer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployerUpdateArgs>(args: SelectSubset<T, EmployerUpdateArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employers.
     * @param {EmployerDeleteManyArgs} args - Arguments to filter Employers to delete.
     * @example
     * // Delete a few Employers
     * const { count } = await prisma.employer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployerDeleteManyArgs>(args?: SelectSubset<T, EmployerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employers
     * const employer = await prisma.employer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployerUpdateManyArgs>(args: SelectSubset<T, EmployerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employer.
     * @param {EmployerUpsertArgs} args - Arguments to update or create a Employer.
     * @example
     * // Update or create a Employer
     * const employer = await prisma.employer.upsert({
     *   create: {
     *     // ... data to create a Employer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employer we want to update
     *   }
     * })
     */
    upsert<T extends EmployerUpsertArgs>(args: SelectSubset<T, EmployerUpsertArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerCountArgs} args - Arguments to filter Employers to count.
     * @example
     * // Count the number of Employers
     * const count = await prisma.employer.count({
     *   where: {
     *     // ... the filter for the Employers we want to count
     *   }
     * })
    **/
    count<T extends EmployerCountArgs>(
      args?: Subset<T, EmployerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployerAggregateArgs>(args: Subset<T, EmployerAggregateArgs>): Prisma.PrismaPromise<GetEmployerAggregateType<T>>

    /**
     * Group by Employer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployerGroupByArgs['orderBy'] }
        : { orderBy?: EmployerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employer model
   */
  readonly fields: EmployerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobs<T extends Employer$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Employer$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Employer$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Employer$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employer model
   */
  interface EmployerFieldRefs {
    readonly id: FieldRef<"Employer", 'Int'>
    readonly companyName: FieldRef<"Employer", 'String'>
    readonly address: FieldRef<"Employer", 'String'>
    readonly userId: FieldRef<"Employer", 'Int'>
    readonly createdAt: FieldRef<"Employer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employer findUnique
   */
  export type EmployerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer findUniqueOrThrow
   */
  export type EmployerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer findFirst
   */
  export type EmployerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employers.
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employers.
     */
    distinct?: EmployerScalarFieldEnum | EmployerScalarFieldEnum[]
  }

  /**
   * Employer findFirstOrThrow
   */
  export type EmployerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employers.
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employers.
     */
    distinct?: EmployerScalarFieldEnum | EmployerScalarFieldEnum[]
  }

  /**
   * Employer findMany
   */
  export type EmployerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employers to fetch.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employers.
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    distinct?: EmployerScalarFieldEnum | EmployerScalarFieldEnum[]
  }

  /**
   * Employer create
   */
  export type EmployerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * The data needed to create a Employer.
     */
    data: XOR<EmployerCreateInput, EmployerUncheckedCreateInput>
  }

  /**
   * Employer createMany
   */
  export type EmployerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employers.
     */
    data: EmployerCreateManyInput | EmployerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employer update
   */
  export type EmployerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * The data needed to update a Employer.
     */
    data: XOR<EmployerUpdateInput, EmployerUncheckedUpdateInput>
    /**
     * Choose, which Employer to update.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer updateMany
   */
  export type EmployerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employers.
     */
    data: XOR<EmployerUpdateManyMutationInput, EmployerUncheckedUpdateManyInput>
    /**
     * Filter which Employers to update
     */
    where?: EmployerWhereInput
    /**
     * Limit how many Employers to update.
     */
    limit?: number
  }

  /**
   * Employer upsert
   */
  export type EmployerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * The filter to search for the Employer to update in case it exists.
     */
    where: EmployerWhereUniqueInput
    /**
     * In case the Employer found by the `where` argument doesn't exist, create a new Employer with this data.
     */
    create: XOR<EmployerCreateInput, EmployerUncheckedCreateInput>
    /**
     * In case the Employer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployerUpdateInput, EmployerUncheckedUpdateInput>
  }

  /**
   * Employer delete
   */
  export type EmployerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter which Employer to delete.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer deleteMany
   */
  export type EmployerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employers to delete
     */
    where?: EmployerWhereInput
    /**
     * Limit how many Employers to delete.
     */
    limit?: number
  }

  /**
   * Employer.jobs
   */
  export type Employer$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Employer.notifications
   */
  export type Employer$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Employer without action
   */
  export type EmployerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    id: number | null
    applicants: number | null
    employerId: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
    applicants: number | null
    employerId: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    location: string | null
    status: string | null
    applicants: number | null
    employerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    location: string | null
    status: string | null
    applicants: number | null
    employerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    title: number
    description: number
    location: number
    status: number
    applicants: number
    employerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
    applicants?: true
    employerId?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
    applicants?: true
    employerId?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    status?: true
    applicants?: true
    employerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    status?: true
    applicants?: true
    employerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    status?: true
    applicants?: true
    employerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: number
    title: string
    description: string
    location: string | null
    status: string
    applicants: number
    employerId: number
    createdAt: Date
    updatedAt: Date
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    status?: boolean
    applicants?: boolean
    employerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    categories?: boolean | Job$categoriesArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>



  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    status?: boolean
    applicants?: boolean
    employerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "location" | "status" | "applicants" | "employerId" | "createdAt" | "updatedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    categories?: boolean | Job$categoriesArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      employer: Prisma.$EmployerPayload<ExtArgs>
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      categories: Prisma.$JobCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      location: string | null
      status: string
      applicants: number
      employerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employer<T extends EmployerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployerDefaultArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Job$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Job$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Job$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'Int'>
    readonly title: FieldRef<"Job", 'String'>
    readonly description: FieldRef<"Job", 'String'>
    readonly location: FieldRef<"Job", 'String'>
    readonly status: FieldRef<"Job", 'String'>
    readonly applicants: FieldRef<"Job", 'Int'>
    readonly employerId: FieldRef<"Job", 'Int'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job.applications
   */
  export type Job$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Job.categories
   */
  export type Job$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobCategory
     */
    select?: JobCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobCategory
     */
    omit?: JobCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobCategoryInclude<ExtArgs> | null
    where?: JobCategoryWhereInput
    orderBy?: JobCategoryOrderByWithRelationInput | JobCategoryOrderByWithRelationInput[]
    cursor?: JobCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobCategoryScalarFieldEnum | JobCategoryScalarFieldEnum[]
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    jobId: number | null
    applicantId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
    jobId: number | null
    applicantId: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    status: string | null
    jobId: number | null
    applicantId: number | null
    createdAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    status: string | null
    jobId: number | null
    applicantId: number | null
    createdAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    status: number
    jobId: number
    applicantId: number
    createdAt: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    jobId?: true
    applicantId?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    jobId?: true
    applicantId?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    status?: true
    jobId?: true
    applicantId?: true
    createdAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    status?: true
    jobId?: true
    applicantId?: true
    createdAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    status?: true
    jobId?: true
    applicantId?: true
    createdAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: number
    status: string
    jobId: number
    applicantId: number
    createdAt: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    jobId?: boolean
    applicantId?: boolean
    createdAt?: boolean
    job?: boolean | JobDefaultArgs<ExtArgs>
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    notifications?: boolean | Application$notificationsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>



  export type ApplicationSelectScalar = {
    id?: boolean
    status?: boolean
    jobId?: boolean
    applicantId?: boolean
    createdAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "jobId" | "applicantId" | "createdAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobDefaultArgs<ExtArgs>
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
    notifications?: boolean | Application$notificationsArgs<ExtArgs>
    _count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      applicant: Prisma.$ApplicantPayload<ExtArgs>
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      jobId: number
      applicantId: number
      createdAt: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobDefaultArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifications<T extends Application$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Application$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'Int'>
    readonly status: FieldRef<"Application", 'String'>
    readonly jobId: FieldRef<"Application", 'Int'>
    readonly applicantId: FieldRef<"Application", 'Int'>
    readonly createdAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.notifications
   */
  export type Application$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
    employerId: number | null
    applicationId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    applicantId: number | null
    employerId: number | null
    applicationId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    readAt: Date | null
    expiresAt: Date | null
    applicantId: number | null
    employerId: number | null
    applicationId: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    readAt: Date | null
    expiresAt: Date | null
    applicantId: number | null
    employerId: number | null
    applicationId: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    title: number
    message: number
    isRead: number
    createdAt: number
    readAt: number
    expiresAt: number
    applicantId: number
    employerId: number
    applicationId: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    applicantId?: true
    employerId?: true
    applicationId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    applicantId?: true
    employerId?: true
    applicationId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    readAt?: true
    expiresAt?: true
    applicantId?: true
    employerId?: true
    applicationId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    readAt?: true
    expiresAt?: true
    applicantId?: true
    employerId?: true
    applicationId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    readAt?: true
    expiresAt?: true
    applicantId?: true
    employerId?: true
    applicationId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    type: $Enums.NotificationType
    title: string
    message: string
    isRead: boolean
    createdAt: Date
    readAt: Date | null
    expiresAt: Date | null
    applicantId: number | null
    employerId: number | null
    applicationId: number | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    readAt?: boolean
    expiresAt?: boolean
    applicantId?: boolean
    employerId?: boolean
    applicationId?: boolean
    applicant?: boolean | Notification$applicantArgs<ExtArgs>
    employer?: boolean | Notification$employerArgs<ExtArgs>
    application?: boolean | Notification$applicationArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    readAt?: boolean
    expiresAt?: boolean
    applicantId?: boolean
    employerId?: boolean
    applicationId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "message" | "isRead" | "createdAt" | "readAt" | "expiresAt" | "applicantId" | "employerId" | "applicationId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | Notification$applicantArgs<ExtArgs>
    employer?: boolean | Notification$employerArgs<ExtArgs>
    application?: boolean | Notification$applicationArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs> | null
      employer: Prisma.$EmployerPayload<ExtArgs> | null
      application: Prisma.$ApplicationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.NotificationType
      title: string
      message: string
      isRead: boolean
      createdAt: Date
      readAt: Date | null
      expiresAt: Date | null
      applicantId: number | null
      employerId: number | null
      applicationId: number | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends Notification$applicantArgs<ExtArgs> = {}>(args?: Subset<T, Notification$applicantArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employer<T extends Notification$employerArgs<ExtArgs> = {}>(args?: Subset<T, Notification$employerArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    application<T extends Notification$applicationArgs<ExtArgs> = {}>(args?: Subset<T, Notification$applicationArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly expiresAt: FieldRef<"Notification", 'DateTime'>
    readonly applicantId: FieldRef<"Notification", 'Int'>
    readonly employerId: FieldRef<"Notification", 'Int'>
    readonly applicationId: FieldRef<"Notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.applicant
   */
  export type Notification$applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    where?: ApplicantWhereInput
  }

  /**
   * Notification.employer
   */
  export type Notification$employerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    where?: EmployerWhereInput
  }

  /**
   * Notification.application
   */
  export type Notification$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model AcademicQualification
   */

  export type AggregateAcademicQualification = {
    _count: AcademicQualificationCountAggregateOutputType | null
    _avg: AcademicQualificationAvgAggregateOutputType | null
    _sum: AcademicQualificationSumAggregateOutputType | null
    _min: AcademicQualificationMinAggregateOutputType | null
    _max: AcademicQualificationMaxAggregateOutputType | null
  }

  export type AcademicQualificationAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type AcademicQualificationSumAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type AcademicQualificationMinAggregateOutputType = {
    id: number | null
    level: string | null
    country: string | null
    institution: string | null
    fieldOfStudy: string | null
    startDate: Date | null
    endDate: Date | null
    certificateUrl: string | null
    applicantId: number | null
  }

  export type AcademicQualificationMaxAggregateOutputType = {
    id: number | null
    level: string | null
    country: string | null
    institution: string | null
    fieldOfStudy: string | null
    startDate: Date | null
    endDate: Date | null
    certificateUrl: string | null
    applicantId: number | null
  }

  export type AcademicQualificationCountAggregateOutputType = {
    id: number
    level: number
    country: number
    institution: number
    fieldOfStudy: number
    startDate: number
    endDate: number
    certificateUrl: number
    applicantId: number
    _all: number
  }


  export type AcademicQualificationAvgAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type AcademicQualificationSumAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type AcademicQualificationMinAggregateInputType = {
    id?: true
    level?: true
    country?: true
    institution?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    certificateUrl?: true
    applicantId?: true
  }

  export type AcademicQualificationMaxAggregateInputType = {
    id?: true
    level?: true
    country?: true
    institution?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    certificateUrl?: true
    applicantId?: true
  }

  export type AcademicQualificationCountAggregateInputType = {
    id?: true
    level?: true
    country?: true
    institution?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    certificateUrl?: true
    applicantId?: true
    _all?: true
  }

  export type AcademicQualificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicQualification to aggregate.
     */
    where?: AcademicQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicQualifications to fetch.
     */
    orderBy?: AcademicQualificationOrderByWithRelationInput | AcademicQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicQualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicQualifications
    **/
    _count?: true | AcademicQualificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcademicQualificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcademicQualificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicQualificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicQualificationMaxAggregateInputType
  }

  export type GetAcademicQualificationAggregateType<T extends AcademicQualificationAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicQualification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicQualification[P]>
      : GetScalarType<T[P], AggregateAcademicQualification[P]>
  }




  export type AcademicQualificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicQualificationWhereInput
    orderBy?: AcademicQualificationOrderByWithAggregationInput | AcademicQualificationOrderByWithAggregationInput[]
    by: AcademicQualificationScalarFieldEnum[] | AcademicQualificationScalarFieldEnum
    having?: AcademicQualificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicQualificationCountAggregateInputType | true
    _avg?: AcademicQualificationAvgAggregateInputType
    _sum?: AcademicQualificationSumAggregateInputType
    _min?: AcademicQualificationMinAggregateInputType
    _max?: AcademicQualificationMaxAggregateInputType
  }

  export type AcademicQualificationGroupByOutputType = {
    id: number
    level: string
    country: string
    institution: string
    fieldOfStudy: string
    startDate: Date
    endDate: Date | null
    certificateUrl: string | null
    applicantId: number
    _count: AcademicQualificationCountAggregateOutputType | null
    _avg: AcademicQualificationAvgAggregateOutputType | null
    _sum: AcademicQualificationSumAggregateOutputType | null
    _min: AcademicQualificationMinAggregateOutputType | null
    _max: AcademicQualificationMaxAggregateOutputType | null
  }

  type GetAcademicQualificationGroupByPayload<T extends AcademicQualificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicQualificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicQualificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicQualificationGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicQualificationGroupByOutputType[P]>
        }
      >
    >


  export type AcademicQualificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    country?: boolean
    institution?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    certificateUrl?: boolean
    applicantId?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicQualification"]>



  export type AcademicQualificationSelectScalar = {
    id?: boolean
    level?: boolean
    country?: boolean
    institution?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    certificateUrl?: boolean
    applicantId?: boolean
  }

  export type AcademicQualificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "level" | "country" | "institution" | "fieldOfStudy" | "startDate" | "endDate" | "certificateUrl" | "applicantId", ExtArgs["result"]["academicQualification"]>
  export type AcademicQualificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }

  export type $AcademicQualificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicQualification"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      level: string
      country: string
      institution: string
      fieldOfStudy: string
      startDate: Date
      endDate: Date | null
      certificateUrl: string | null
      applicantId: number
    }, ExtArgs["result"]["academicQualification"]>
    composites: {}
  }

  type AcademicQualificationGetPayload<S extends boolean | null | undefined | AcademicQualificationDefaultArgs> = $Result.GetResult<Prisma.$AcademicQualificationPayload, S>

  type AcademicQualificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcademicQualificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademicQualificationCountAggregateInputType | true
    }

  export interface AcademicQualificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicQualification'], meta: { name: 'AcademicQualification' } }
    /**
     * Find zero or one AcademicQualification that matches the filter.
     * @param {AcademicQualificationFindUniqueArgs} args - Arguments to find a AcademicQualification
     * @example
     * // Get one AcademicQualification
     * const academicQualification = await prisma.academicQualification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicQualificationFindUniqueArgs>(args: SelectSubset<T, AcademicQualificationFindUniqueArgs<ExtArgs>>): Prisma__AcademicQualificationClient<$Result.GetResult<Prisma.$AcademicQualificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcademicQualification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademicQualificationFindUniqueOrThrowArgs} args - Arguments to find a AcademicQualification
     * @example
     * // Get one AcademicQualification
     * const academicQualification = await prisma.academicQualification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicQualificationFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicQualificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicQualificationClient<$Result.GetResult<Prisma.$AcademicQualificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicQualification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicQualificationFindFirstArgs} args - Arguments to find a AcademicQualification
     * @example
     * // Get one AcademicQualification
     * const academicQualification = await prisma.academicQualification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicQualificationFindFirstArgs>(args?: SelectSubset<T, AcademicQualificationFindFirstArgs<ExtArgs>>): Prisma__AcademicQualificationClient<$Result.GetResult<Prisma.$AcademicQualificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicQualification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicQualificationFindFirstOrThrowArgs} args - Arguments to find a AcademicQualification
     * @example
     * // Get one AcademicQualification
     * const academicQualification = await prisma.academicQualification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicQualificationFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicQualificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicQualificationClient<$Result.GetResult<Prisma.$AcademicQualificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcademicQualifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicQualificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicQualifications
     * const academicQualifications = await prisma.academicQualification.findMany()
     * 
     * // Get first 10 AcademicQualifications
     * const academicQualifications = await prisma.academicQualification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicQualificationWithIdOnly = await prisma.academicQualification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademicQualificationFindManyArgs>(args?: SelectSubset<T, AcademicQualificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicQualificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcademicQualification.
     * @param {AcademicQualificationCreateArgs} args - Arguments to create a AcademicQualification.
     * @example
     * // Create one AcademicQualification
     * const AcademicQualification = await prisma.academicQualification.create({
     *   data: {
     *     // ... data to create a AcademicQualification
     *   }
     * })
     * 
     */
    create<T extends AcademicQualificationCreateArgs>(args: SelectSubset<T, AcademicQualificationCreateArgs<ExtArgs>>): Prisma__AcademicQualificationClient<$Result.GetResult<Prisma.$AcademicQualificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcademicQualifications.
     * @param {AcademicQualificationCreateManyArgs} args - Arguments to create many AcademicQualifications.
     * @example
     * // Create many AcademicQualifications
     * const academicQualification = await prisma.academicQualification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicQualificationCreateManyArgs>(args?: SelectSubset<T, AcademicQualificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AcademicQualification.
     * @param {AcademicQualificationDeleteArgs} args - Arguments to delete one AcademicQualification.
     * @example
     * // Delete one AcademicQualification
     * const AcademicQualification = await prisma.academicQualification.delete({
     *   where: {
     *     // ... filter to delete one AcademicQualification
     *   }
     * })
     * 
     */
    delete<T extends AcademicQualificationDeleteArgs>(args: SelectSubset<T, AcademicQualificationDeleteArgs<ExtArgs>>): Prisma__AcademicQualificationClient<$Result.GetResult<Prisma.$AcademicQualificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcademicQualification.
     * @param {AcademicQualificationUpdateArgs} args - Arguments to update one AcademicQualification.
     * @example
     * // Update one AcademicQualification
     * const academicQualification = await prisma.academicQualification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicQualificationUpdateArgs>(args: SelectSubset<T, AcademicQualificationUpdateArgs<ExtArgs>>): Prisma__AcademicQualificationClient<$Result.GetResult<Prisma.$AcademicQualificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcademicQualifications.
     * @param {AcademicQualificationDeleteManyArgs} args - Arguments to filter AcademicQualifications to delete.
     * @example
     * // Delete a few AcademicQualifications
     * const { count } = await prisma.academicQualification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicQualificationDeleteManyArgs>(args?: SelectSubset<T, AcademicQualificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicQualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicQualificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicQualifications
     * const academicQualification = await prisma.academicQualification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicQualificationUpdateManyArgs>(args: SelectSubset<T, AcademicQualificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AcademicQualification.
     * @param {AcademicQualificationUpsertArgs} args - Arguments to update or create a AcademicQualification.
     * @example
     * // Update or create a AcademicQualification
     * const academicQualification = await prisma.academicQualification.upsert({
     *   create: {
     *     // ... data to create a AcademicQualification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicQualification we want to update
     *   }
     * })
     */
    upsert<T extends AcademicQualificationUpsertArgs>(args: SelectSubset<T, AcademicQualificationUpsertArgs<ExtArgs>>): Prisma__AcademicQualificationClient<$Result.GetResult<Prisma.$AcademicQualificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcademicQualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicQualificationCountArgs} args - Arguments to filter AcademicQualifications to count.
     * @example
     * // Count the number of AcademicQualifications
     * const count = await prisma.academicQualification.count({
     *   where: {
     *     // ... the filter for the AcademicQualifications we want to count
     *   }
     * })
    **/
    count<T extends AcademicQualificationCountArgs>(
      args?: Subset<T, AcademicQualificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicQualificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicQualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicQualificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcademicQualificationAggregateArgs>(args: Subset<T, AcademicQualificationAggregateArgs>): Prisma.PrismaPromise<GetAcademicQualificationAggregateType<T>>

    /**
     * Group by AcademicQualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicQualificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcademicQualificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicQualificationGroupByArgs['orderBy'] }
        : { orderBy?: AcademicQualificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcademicQualificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicQualificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicQualification model
   */
  readonly fields: AcademicQualificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicQualification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicQualificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AcademicQualification model
   */
  interface AcademicQualificationFieldRefs {
    readonly id: FieldRef<"AcademicQualification", 'Int'>
    readonly level: FieldRef<"AcademicQualification", 'String'>
    readonly country: FieldRef<"AcademicQualification", 'String'>
    readonly institution: FieldRef<"AcademicQualification", 'String'>
    readonly fieldOfStudy: FieldRef<"AcademicQualification", 'String'>
    readonly startDate: FieldRef<"AcademicQualification", 'DateTime'>
    readonly endDate: FieldRef<"AcademicQualification", 'DateTime'>
    readonly certificateUrl: FieldRef<"AcademicQualification", 'String'>
    readonly applicantId: FieldRef<"AcademicQualification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AcademicQualification findUnique
   */
  export type AcademicQualificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
    /**
     * Filter, which AcademicQualification to fetch.
     */
    where: AcademicQualificationWhereUniqueInput
  }

  /**
   * AcademicQualification findUniqueOrThrow
   */
  export type AcademicQualificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
    /**
     * Filter, which AcademicQualification to fetch.
     */
    where: AcademicQualificationWhereUniqueInput
  }

  /**
   * AcademicQualification findFirst
   */
  export type AcademicQualificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
    /**
     * Filter, which AcademicQualification to fetch.
     */
    where?: AcademicQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicQualifications to fetch.
     */
    orderBy?: AcademicQualificationOrderByWithRelationInput | AcademicQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicQualifications.
     */
    cursor?: AcademicQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicQualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicQualifications.
     */
    distinct?: AcademicQualificationScalarFieldEnum | AcademicQualificationScalarFieldEnum[]
  }

  /**
   * AcademicQualification findFirstOrThrow
   */
  export type AcademicQualificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
    /**
     * Filter, which AcademicQualification to fetch.
     */
    where?: AcademicQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicQualifications to fetch.
     */
    orderBy?: AcademicQualificationOrderByWithRelationInput | AcademicQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicQualifications.
     */
    cursor?: AcademicQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicQualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicQualifications.
     */
    distinct?: AcademicQualificationScalarFieldEnum | AcademicQualificationScalarFieldEnum[]
  }

  /**
   * AcademicQualification findMany
   */
  export type AcademicQualificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
    /**
     * Filter, which AcademicQualifications to fetch.
     */
    where?: AcademicQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicQualifications to fetch.
     */
    orderBy?: AcademicQualificationOrderByWithRelationInput | AcademicQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicQualifications.
     */
    cursor?: AcademicQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicQualifications.
     */
    skip?: number
    distinct?: AcademicQualificationScalarFieldEnum | AcademicQualificationScalarFieldEnum[]
  }

  /**
   * AcademicQualification create
   */
  export type AcademicQualificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
    /**
     * The data needed to create a AcademicQualification.
     */
    data: XOR<AcademicQualificationCreateInput, AcademicQualificationUncheckedCreateInput>
  }

  /**
   * AcademicQualification createMany
   */
  export type AcademicQualificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicQualifications.
     */
    data: AcademicQualificationCreateManyInput | AcademicQualificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicQualification update
   */
  export type AcademicQualificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
    /**
     * The data needed to update a AcademicQualification.
     */
    data: XOR<AcademicQualificationUpdateInput, AcademicQualificationUncheckedUpdateInput>
    /**
     * Choose, which AcademicQualification to update.
     */
    where: AcademicQualificationWhereUniqueInput
  }

  /**
   * AcademicQualification updateMany
   */
  export type AcademicQualificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicQualifications.
     */
    data: XOR<AcademicQualificationUpdateManyMutationInput, AcademicQualificationUncheckedUpdateManyInput>
    /**
     * Filter which AcademicQualifications to update
     */
    where?: AcademicQualificationWhereInput
    /**
     * Limit how many AcademicQualifications to update.
     */
    limit?: number
  }

  /**
   * AcademicQualification upsert
   */
  export type AcademicQualificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
    /**
     * The filter to search for the AcademicQualification to update in case it exists.
     */
    where: AcademicQualificationWhereUniqueInput
    /**
     * In case the AcademicQualification found by the `where` argument doesn't exist, create a new AcademicQualification with this data.
     */
    create: XOR<AcademicQualificationCreateInput, AcademicQualificationUncheckedCreateInput>
    /**
     * In case the AcademicQualification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicQualificationUpdateInput, AcademicQualificationUncheckedUpdateInput>
  }

  /**
   * AcademicQualification delete
   */
  export type AcademicQualificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
    /**
     * Filter which AcademicQualification to delete.
     */
    where: AcademicQualificationWhereUniqueInput
  }

  /**
   * AcademicQualification deleteMany
   */
  export type AcademicQualificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicQualifications to delete
     */
    where?: AcademicQualificationWhereInput
    /**
     * Limit how many AcademicQualifications to delete.
     */
    limit?: number
  }

  /**
   * AcademicQualification without action
   */
  export type AcademicQualificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicQualification
     */
    select?: AcademicQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicQualification
     */
    omit?: AcademicQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicQualificationInclude<ExtArgs> | null
  }


  /**
   * Model WorkExperience
   */

  export type AggregateWorkExperience = {
    _count: WorkExperienceCountAggregateOutputType | null
    _avg: WorkExperienceAvgAggregateOutputType | null
    _sum: WorkExperienceSumAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  export type WorkExperienceAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type WorkExperienceSumAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type WorkExperienceMinAggregateOutputType = {
    id: number | null
    institution: string | null
    institutionAddress: string | null
    jobTitle: string | null
    startDate: Date | null
    endDate: Date | null
    duties: string | null
    supervisorName: string | null
    supervisorTel: string | null
    supervisorAddress: string | null
    applicantId: number | null
  }

  export type WorkExperienceMaxAggregateOutputType = {
    id: number | null
    institution: string | null
    institutionAddress: string | null
    jobTitle: string | null
    startDate: Date | null
    endDate: Date | null
    duties: string | null
    supervisorName: string | null
    supervisorTel: string | null
    supervisorAddress: string | null
    applicantId: number | null
  }

  export type WorkExperienceCountAggregateOutputType = {
    id: number
    institution: number
    institutionAddress: number
    jobTitle: number
    startDate: number
    endDate: number
    duties: number
    supervisorName: number
    supervisorTel: number
    supervisorAddress: number
    applicantId: number
    _all: number
  }


  export type WorkExperienceAvgAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type WorkExperienceSumAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type WorkExperienceMinAggregateInputType = {
    id?: true
    institution?: true
    institutionAddress?: true
    jobTitle?: true
    startDate?: true
    endDate?: true
    duties?: true
    supervisorName?: true
    supervisorTel?: true
    supervisorAddress?: true
    applicantId?: true
  }

  export type WorkExperienceMaxAggregateInputType = {
    id?: true
    institution?: true
    institutionAddress?: true
    jobTitle?: true
    startDate?: true
    endDate?: true
    duties?: true
    supervisorName?: true
    supervisorTel?: true
    supervisorAddress?: true
    applicantId?: true
  }

  export type WorkExperienceCountAggregateInputType = {
    id?: true
    institution?: true
    institutionAddress?: true
    jobTitle?: true
    startDate?: true
    endDate?: true
    duties?: true
    supervisorName?: true
    supervisorTel?: true
    supervisorAddress?: true
    applicantId?: true
    _all?: true
  }

  export type WorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperience to aggregate.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkExperiences
    **/
    _count?: true | WorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type GetWorkExperienceAggregateType<T extends WorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkExperience[P]>
      : GetScalarType<T[P], AggregateWorkExperience[P]>
  }




  export type WorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkExperienceWhereInput
    orderBy?: WorkExperienceOrderByWithAggregationInput | WorkExperienceOrderByWithAggregationInput[]
    by: WorkExperienceScalarFieldEnum[] | WorkExperienceScalarFieldEnum
    having?: WorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkExperienceCountAggregateInputType | true
    _avg?: WorkExperienceAvgAggregateInputType
    _sum?: WorkExperienceSumAggregateInputType
    _min?: WorkExperienceMinAggregateInputType
    _max?: WorkExperienceMaxAggregateInputType
  }

  export type WorkExperienceGroupByOutputType = {
    id: number
    institution: string
    institutionAddress: string | null
    jobTitle: string
    startDate: Date
    endDate: Date | null
    duties: string | null
    supervisorName: string | null
    supervisorTel: string | null
    supervisorAddress: string | null
    applicantId: number
    _count: WorkExperienceCountAggregateOutputType | null
    _avg: WorkExperienceAvgAggregateOutputType | null
    _sum: WorkExperienceSumAggregateOutputType | null
    _min: WorkExperienceMinAggregateOutputType | null
    _max: WorkExperienceMaxAggregateOutputType | null
  }

  type GetWorkExperienceGroupByPayload<T extends WorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type WorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    institutionAddress?: boolean
    jobTitle?: boolean
    startDate?: boolean
    endDate?: boolean
    duties?: boolean
    supervisorName?: boolean
    supervisorTel?: boolean
    supervisorAddress?: boolean
    applicantId?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>



  export type WorkExperienceSelectScalar = {
    id?: boolean
    institution?: boolean
    institutionAddress?: boolean
    jobTitle?: boolean
    startDate?: boolean
    endDate?: boolean
    duties?: boolean
    supervisorName?: boolean
    supervisorTel?: boolean
    supervisorAddress?: boolean
    applicantId?: boolean
  }

  export type WorkExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institution" | "institutionAddress" | "jobTitle" | "startDate" | "endDate" | "duties" | "supervisorName" | "supervisorTel" | "supervisorAddress" | "applicantId", ExtArgs["result"]["workExperience"]>
  export type WorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }

  export type $WorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkExperience"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      institution: string
      institutionAddress: string | null
      jobTitle: string
      startDate: Date
      endDate: Date | null
      duties: string | null
      supervisorName: string | null
      supervisorTel: string | null
      supervisorAddress: string | null
      applicantId: number
    }, ExtArgs["result"]["workExperience"]>
    composites: {}
  }

  type WorkExperienceGetPayload<S extends boolean | null | undefined | WorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$WorkExperiencePayload, S>

  type WorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkExperienceCountAggregateInputType | true
    }

  export interface WorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkExperience'], meta: { name: 'WorkExperience' } }
    /**
     * Find zero or one WorkExperience that matches the filter.
     * @param {WorkExperienceFindUniqueArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkExperienceFindUniqueArgs>(args: SelectSubset<T, WorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkExperienceFindFirstArgs>(args?: SelectSubset<T, WorkExperienceFindFirstArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindFirstOrThrowArgs} args - Arguments to find a WorkExperience
     * @example
     * // Get one WorkExperience
     * const workExperience = await prisma.workExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany()
     * 
     * // Get first 10 WorkExperiences
     * const workExperiences = await prisma.workExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workExperienceWithIdOnly = await prisma.workExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkExperienceFindManyArgs>(args?: SelectSubset<T, WorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkExperience.
     * @param {WorkExperienceCreateArgs} args - Arguments to create a WorkExperience.
     * @example
     * // Create one WorkExperience
     * const WorkExperience = await prisma.workExperience.create({
     *   data: {
     *     // ... data to create a WorkExperience
     *   }
     * })
     * 
     */
    create<T extends WorkExperienceCreateArgs>(args: SelectSubset<T, WorkExperienceCreateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkExperiences.
     * @param {WorkExperienceCreateManyArgs} args - Arguments to create many WorkExperiences.
     * @example
     * // Create many WorkExperiences
     * const workExperience = await prisma.workExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkExperienceCreateManyArgs>(args?: SelectSubset<T, WorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkExperience.
     * @param {WorkExperienceDeleteArgs} args - Arguments to delete one WorkExperience.
     * @example
     * // Delete one WorkExperience
     * const WorkExperience = await prisma.workExperience.delete({
     *   where: {
     *     // ... filter to delete one WorkExperience
     *   }
     * })
     * 
     */
    delete<T extends WorkExperienceDeleteArgs>(args: SelectSubset<T, WorkExperienceDeleteArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkExperience.
     * @param {WorkExperienceUpdateArgs} args - Arguments to update one WorkExperience.
     * @example
     * // Update one WorkExperience
     * const workExperience = await prisma.workExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkExperienceUpdateArgs>(args: SelectSubset<T, WorkExperienceUpdateArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkExperiences.
     * @param {WorkExperienceDeleteManyArgs} args - Arguments to filter WorkExperiences to delete.
     * @example
     * // Delete a few WorkExperiences
     * const { count } = await prisma.workExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkExperienceDeleteManyArgs>(args?: SelectSubset<T, WorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkExperiences
     * const workExperience = await prisma.workExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkExperienceUpdateManyArgs>(args: SelectSubset<T, WorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkExperience.
     * @param {WorkExperienceUpsertArgs} args - Arguments to update or create a WorkExperience.
     * @example
     * // Update or create a WorkExperience
     * const workExperience = await prisma.workExperience.upsert({
     *   create: {
     *     // ... data to create a WorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends WorkExperienceUpsertArgs>(args: SelectSubset<T, WorkExperienceUpsertArgs<ExtArgs>>): Prisma__WorkExperienceClient<$Result.GetResult<Prisma.$WorkExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceCountArgs} args - Arguments to filter WorkExperiences to count.
     * @example
     * // Count the number of WorkExperiences
     * const count = await prisma.workExperience.count({
     *   where: {
     *     // ... the filter for the WorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends WorkExperienceCountArgs>(
      args?: Subset<T, WorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkExperienceAggregateArgs>(args: Subset<T, WorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetWorkExperienceAggregateType<T>>

    /**
     * Group by WorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: WorkExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkExperience model
   */
  readonly fields: WorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkExperience model
   */
  interface WorkExperienceFieldRefs {
    readonly id: FieldRef<"WorkExperience", 'Int'>
    readonly institution: FieldRef<"WorkExperience", 'String'>
    readonly institutionAddress: FieldRef<"WorkExperience", 'String'>
    readonly jobTitle: FieldRef<"WorkExperience", 'String'>
    readonly startDate: FieldRef<"WorkExperience", 'DateTime'>
    readonly endDate: FieldRef<"WorkExperience", 'DateTime'>
    readonly duties: FieldRef<"WorkExperience", 'String'>
    readonly supervisorName: FieldRef<"WorkExperience", 'String'>
    readonly supervisorTel: FieldRef<"WorkExperience", 'String'>
    readonly supervisorAddress: FieldRef<"WorkExperience", 'String'>
    readonly applicantId: FieldRef<"WorkExperience", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkExperience findUnique
   */
  export type WorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findUniqueOrThrow
   */
  export type WorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience findFirst
   */
  export type WorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findFirstOrThrow
   */
  export type WorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperience to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkExperiences.
     */
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience findMany
   */
  export type WorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which WorkExperiences to fetch.
     */
    where?: WorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkExperiences to fetch.
     */
    orderBy?: WorkExperienceOrderByWithRelationInput | WorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkExperiences.
     */
    cursor?: WorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkExperiences.
     */
    skip?: number
    distinct?: WorkExperienceScalarFieldEnum | WorkExperienceScalarFieldEnum[]
  }

  /**
   * WorkExperience create
   */
  export type WorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkExperience.
     */
    data: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
  }

  /**
   * WorkExperience createMany
   */
  export type WorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkExperiences.
     */
    data: WorkExperienceCreateManyInput | WorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkExperience update
   */
  export type WorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkExperience.
     */
    data: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which WorkExperience to update.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience updateMany
   */
  export type WorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkExperiences.
     */
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which WorkExperiences to update
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to update.
     */
    limit?: number
  }

  /**
   * WorkExperience upsert
   */
  export type WorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkExperience to update in case it exists.
     */
    where: WorkExperienceWhereUniqueInput
    /**
     * In case the WorkExperience found by the `where` argument doesn't exist, create a new WorkExperience with this data.
     */
    create: XOR<WorkExperienceCreateInput, WorkExperienceUncheckedCreateInput>
    /**
     * In case the WorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkExperienceUpdateInput, WorkExperienceUncheckedUpdateInput>
  }

  /**
   * WorkExperience delete
   */
  export type WorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which WorkExperience to delete.
     */
    where: WorkExperienceWhereUniqueInput
  }

  /**
   * WorkExperience deleteMany
   */
  export type WorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkExperiences to delete
     */
    where?: WorkExperienceWhereInput
    /**
     * Limit how many WorkExperiences to delete.
     */
    limit?: number
  }

  /**
   * WorkExperience without action
   */
  export type WorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkExperience
     */
    select?: WorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkExperience
     */
    omit?: WorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkExperienceInclude<ExtArgs> | null
  }


  /**
   * Model LanguageProficiency
   */

  export type AggregateLanguageProficiency = {
    _count: LanguageProficiencyCountAggregateOutputType | null
    _avg: LanguageProficiencyAvgAggregateOutputType | null
    _sum: LanguageProficiencySumAggregateOutputType | null
    _min: LanguageProficiencyMinAggregateOutputType | null
    _max: LanguageProficiencyMaxAggregateOutputType | null
  }

  export type LanguageProficiencyAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type LanguageProficiencySumAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type LanguageProficiencyMinAggregateOutputType = {
    id: number | null
    language: string | null
    speak: string | null
    read: string | null
    write: string | null
    applicantId: number | null
  }

  export type LanguageProficiencyMaxAggregateOutputType = {
    id: number | null
    language: string | null
    speak: string | null
    read: string | null
    write: string | null
    applicantId: number | null
  }

  export type LanguageProficiencyCountAggregateOutputType = {
    id: number
    language: number
    speak: number
    read: number
    write: number
    applicantId: number
    _all: number
  }


  export type LanguageProficiencyAvgAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type LanguageProficiencySumAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type LanguageProficiencyMinAggregateInputType = {
    id?: true
    language?: true
    speak?: true
    read?: true
    write?: true
    applicantId?: true
  }

  export type LanguageProficiencyMaxAggregateInputType = {
    id?: true
    language?: true
    speak?: true
    read?: true
    write?: true
    applicantId?: true
  }

  export type LanguageProficiencyCountAggregateInputType = {
    id?: true
    language?: true
    speak?: true
    read?: true
    write?: true
    applicantId?: true
    _all?: true
  }

  export type LanguageProficiencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageProficiency to aggregate.
     */
    where?: LanguageProficiencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageProficiencies to fetch.
     */
    orderBy?: LanguageProficiencyOrderByWithRelationInput | LanguageProficiencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageProficiencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageProficiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageProficiencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LanguageProficiencies
    **/
    _count?: true | LanguageProficiencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageProficiencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageProficiencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageProficiencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageProficiencyMaxAggregateInputType
  }

  export type GetLanguageProficiencyAggregateType<T extends LanguageProficiencyAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguageProficiency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguageProficiency[P]>
      : GetScalarType<T[P], AggregateLanguageProficiency[P]>
  }




  export type LanguageProficiencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageProficiencyWhereInput
    orderBy?: LanguageProficiencyOrderByWithAggregationInput | LanguageProficiencyOrderByWithAggregationInput[]
    by: LanguageProficiencyScalarFieldEnum[] | LanguageProficiencyScalarFieldEnum
    having?: LanguageProficiencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageProficiencyCountAggregateInputType | true
    _avg?: LanguageProficiencyAvgAggregateInputType
    _sum?: LanguageProficiencySumAggregateInputType
    _min?: LanguageProficiencyMinAggregateInputType
    _max?: LanguageProficiencyMaxAggregateInputType
  }

  export type LanguageProficiencyGroupByOutputType = {
    id: number
    language: string
    speak: string
    read: string
    write: string
    applicantId: number
    _count: LanguageProficiencyCountAggregateOutputType | null
    _avg: LanguageProficiencyAvgAggregateOutputType | null
    _sum: LanguageProficiencySumAggregateOutputType | null
    _min: LanguageProficiencyMinAggregateOutputType | null
    _max: LanguageProficiencyMaxAggregateOutputType | null
  }

  type GetLanguageProficiencyGroupByPayload<T extends LanguageProficiencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageProficiencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageProficiencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageProficiencyGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageProficiencyGroupByOutputType[P]>
        }
      >
    >


  export type LanguageProficiencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    speak?: boolean
    read?: boolean
    write?: boolean
    applicantId?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageProficiency"]>



  export type LanguageProficiencySelectScalar = {
    id?: boolean
    language?: boolean
    speak?: boolean
    read?: boolean
    write?: boolean
    applicantId?: boolean
  }

  export type LanguageProficiencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "language" | "speak" | "read" | "write" | "applicantId", ExtArgs["result"]["languageProficiency"]>
  export type LanguageProficiencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }

  export type $LanguageProficiencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LanguageProficiency"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      language: string
      speak: string
      read: string
      write: string
      applicantId: number
    }, ExtArgs["result"]["languageProficiency"]>
    composites: {}
  }

  type LanguageProficiencyGetPayload<S extends boolean | null | undefined | LanguageProficiencyDefaultArgs> = $Result.GetResult<Prisma.$LanguageProficiencyPayload, S>

  type LanguageProficiencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageProficiencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageProficiencyCountAggregateInputType | true
    }

  export interface LanguageProficiencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LanguageProficiency'], meta: { name: 'LanguageProficiency' } }
    /**
     * Find zero or one LanguageProficiency that matches the filter.
     * @param {LanguageProficiencyFindUniqueArgs} args - Arguments to find a LanguageProficiency
     * @example
     * // Get one LanguageProficiency
     * const languageProficiency = await prisma.languageProficiency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageProficiencyFindUniqueArgs>(args: SelectSubset<T, LanguageProficiencyFindUniqueArgs<ExtArgs>>): Prisma__LanguageProficiencyClient<$Result.GetResult<Prisma.$LanguageProficiencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LanguageProficiency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageProficiencyFindUniqueOrThrowArgs} args - Arguments to find a LanguageProficiency
     * @example
     * // Get one LanguageProficiency
     * const languageProficiency = await prisma.languageProficiency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageProficiencyFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageProficiencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageProficiencyClient<$Result.GetResult<Prisma.$LanguageProficiencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageProficiency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageProficiencyFindFirstArgs} args - Arguments to find a LanguageProficiency
     * @example
     * // Get one LanguageProficiency
     * const languageProficiency = await prisma.languageProficiency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageProficiencyFindFirstArgs>(args?: SelectSubset<T, LanguageProficiencyFindFirstArgs<ExtArgs>>): Prisma__LanguageProficiencyClient<$Result.GetResult<Prisma.$LanguageProficiencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LanguageProficiency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageProficiencyFindFirstOrThrowArgs} args - Arguments to find a LanguageProficiency
     * @example
     * // Get one LanguageProficiency
     * const languageProficiency = await prisma.languageProficiency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageProficiencyFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageProficiencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageProficiencyClient<$Result.GetResult<Prisma.$LanguageProficiencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LanguageProficiencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageProficiencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LanguageProficiencies
     * const languageProficiencies = await prisma.languageProficiency.findMany()
     * 
     * // Get first 10 LanguageProficiencies
     * const languageProficiencies = await prisma.languageProficiency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageProficiencyWithIdOnly = await prisma.languageProficiency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageProficiencyFindManyArgs>(args?: SelectSubset<T, LanguageProficiencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguageProficiencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LanguageProficiency.
     * @param {LanguageProficiencyCreateArgs} args - Arguments to create a LanguageProficiency.
     * @example
     * // Create one LanguageProficiency
     * const LanguageProficiency = await prisma.languageProficiency.create({
     *   data: {
     *     // ... data to create a LanguageProficiency
     *   }
     * })
     * 
     */
    create<T extends LanguageProficiencyCreateArgs>(args: SelectSubset<T, LanguageProficiencyCreateArgs<ExtArgs>>): Prisma__LanguageProficiencyClient<$Result.GetResult<Prisma.$LanguageProficiencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LanguageProficiencies.
     * @param {LanguageProficiencyCreateManyArgs} args - Arguments to create many LanguageProficiencies.
     * @example
     * // Create many LanguageProficiencies
     * const languageProficiency = await prisma.languageProficiency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageProficiencyCreateManyArgs>(args?: SelectSubset<T, LanguageProficiencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LanguageProficiency.
     * @param {LanguageProficiencyDeleteArgs} args - Arguments to delete one LanguageProficiency.
     * @example
     * // Delete one LanguageProficiency
     * const LanguageProficiency = await prisma.languageProficiency.delete({
     *   where: {
     *     // ... filter to delete one LanguageProficiency
     *   }
     * })
     * 
     */
    delete<T extends LanguageProficiencyDeleteArgs>(args: SelectSubset<T, LanguageProficiencyDeleteArgs<ExtArgs>>): Prisma__LanguageProficiencyClient<$Result.GetResult<Prisma.$LanguageProficiencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LanguageProficiency.
     * @param {LanguageProficiencyUpdateArgs} args - Arguments to update one LanguageProficiency.
     * @example
     * // Update one LanguageProficiency
     * const languageProficiency = await prisma.languageProficiency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageProficiencyUpdateArgs>(args: SelectSubset<T, LanguageProficiencyUpdateArgs<ExtArgs>>): Prisma__LanguageProficiencyClient<$Result.GetResult<Prisma.$LanguageProficiencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LanguageProficiencies.
     * @param {LanguageProficiencyDeleteManyArgs} args - Arguments to filter LanguageProficiencies to delete.
     * @example
     * // Delete a few LanguageProficiencies
     * const { count } = await prisma.languageProficiency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageProficiencyDeleteManyArgs>(args?: SelectSubset<T, LanguageProficiencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LanguageProficiencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageProficiencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LanguageProficiencies
     * const languageProficiency = await prisma.languageProficiency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageProficiencyUpdateManyArgs>(args: SelectSubset<T, LanguageProficiencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LanguageProficiency.
     * @param {LanguageProficiencyUpsertArgs} args - Arguments to update or create a LanguageProficiency.
     * @example
     * // Update or create a LanguageProficiency
     * const languageProficiency = await prisma.languageProficiency.upsert({
     *   create: {
     *     // ... data to create a LanguageProficiency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LanguageProficiency we want to update
     *   }
     * })
     */
    upsert<T extends LanguageProficiencyUpsertArgs>(args: SelectSubset<T, LanguageProficiencyUpsertArgs<ExtArgs>>): Prisma__LanguageProficiencyClient<$Result.GetResult<Prisma.$LanguageProficiencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LanguageProficiencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageProficiencyCountArgs} args - Arguments to filter LanguageProficiencies to count.
     * @example
     * // Count the number of LanguageProficiencies
     * const count = await prisma.languageProficiency.count({
     *   where: {
     *     // ... the filter for the LanguageProficiencies we want to count
     *   }
     * })
    **/
    count<T extends LanguageProficiencyCountArgs>(
      args?: Subset<T, LanguageProficiencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageProficiencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LanguageProficiency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageProficiencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageProficiencyAggregateArgs>(args: Subset<T, LanguageProficiencyAggregateArgs>): Prisma.PrismaPromise<GetLanguageProficiencyAggregateType<T>>

    /**
     * Group by LanguageProficiency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageProficiencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageProficiencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageProficiencyGroupByArgs['orderBy'] }
        : { orderBy?: LanguageProficiencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageProficiencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageProficiencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LanguageProficiency model
   */
  readonly fields: LanguageProficiencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LanguageProficiency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageProficiencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LanguageProficiency model
   */
  interface LanguageProficiencyFieldRefs {
    readonly id: FieldRef<"LanguageProficiency", 'Int'>
    readonly language: FieldRef<"LanguageProficiency", 'String'>
    readonly speak: FieldRef<"LanguageProficiency", 'String'>
    readonly read: FieldRef<"LanguageProficiency", 'String'>
    readonly write: FieldRef<"LanguageProficiency", 'String'>
    readonly applicantId: FieldRef<"LanguageProficiency", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LanguageProficiency findUnique
   */
  export type LanguageProficiencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
    /**
     * Filter, which LanguageProficiency to fetch.
     */
    where: LanguageProficiencyWhereUniqueInput
  }

  /**
   * LanguageProficiency findUniqueOrThrow
   */
  export type LanguageProficiencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
    /**
     * Filter, which LanguageProficiency to fetch.
     */
    where: LanguageProficiencyWhereUniqueInput
  }

  /**
   * LanguageProficiency findFirst
   */
  export type LanguageProficiencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
    /**
     * Filter, which LanguageProficiency to fetch.
     */
    where?: LanguageProficiencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageProficiencies to fetch.
     */
    orderBy?: LanguageProficiencyOrderByWithRelationInput | LanguageProficiencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageProficiencies.
     */
    cursor?: LanguageProficiencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageProficiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageProficiencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageProficiencies.
     */
    distinct?: LanguageProficiencyScalarFieldEnum | LanguageProficiencyScalarFieldEnum[]
  }

  /**
   * LanguageProficiency findFirstOrThrow
   */
  export type LanguageProficiencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
    /**
     * Filter, which LanguageProficiency to fetch.
     */
    where?: LanguageProficiencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageProficiencies to fetch.
     */
    orderBy?: LanguageProficiencyOrderByWithRelationInput | LanguageProficiencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LanguageProficiencies.
     */
    cursor?: LanguageProficiencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageProficiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageProficiencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LanguageProficiencies.
     */
    distinct?: LanguageProficiencyScalarFieldEnum | LanguageProficiencyScalarFieldEnum[]
  }

  /**
   * LanguageProficiency findMany
   */
  export type LanguageProficiencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
    /**
     * Filter, which LanguageProficiencies to fetch.
     */
    where?: LanguageProficiencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LanguageProficiencies to fetch.
     */
    orderBy?: LanguageProficiencyOrderByWithRelationInput | LanguageProficiencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LanguageProficiencies.
     */
    cursor?: LanguageProficiencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LanguageProficiencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LanguageProficiencies.
     */
    skip?: number
    distinct?: LanguageProficiencyScalarFieldEnum | LanguageProficiencyScalarFieldEnum[]
  }

  /**
   * LanguageProficiency create
   */
  export type LanguageProficiencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
    /**
     * The data needed to create a LanguageProficiency.
     */
    data: XOR<LanguageProficiencyCreateInput, LanguageProficiencyUncheckedCreateInput>
  }

  /**
   * LanguageProficiency createMany
   */
  export type LanguageProficiencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LanguageProficiencies.
     */
    data: LanguageProficiencyCreateManyInput | LanguageProficiencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LanguageProficiency update
   */
  export type LanguageProficiencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
    /**
     * The data needed to update a LanguageProficiency.
     */
    data: XOR<LanguageProficiencyUpdateInput, LanguageProficiencyUncheckedUpdateInput>
    /**
     * Choose, which LanguageProficiency to update.
     */
    where: LanguageProficiencyWhereUniqueInput
  }

  /**
   * LanguageProficiency updateMany
   */
  export type LanguageProficiencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LanguageProficiencies.
     */
    data: XOR<LanguageProficiencyUpdateManyMutationInput, LanguageProficiencyUncheckedUpdateManyInput>
    /**
     * Filter which LanguageProficiencies to update
     */
    where?: LanguageProficiencyWhereInput
    /**
     * Limit how many LanguageProficiencies to update.
     */
    limit?: number
  }

  /**
   * LanguageProficiency upsert
   */
  export type LanguageProficiencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
    /**
     * The filter to search for the LanguageProficiency to update in case it exists.
     */
    where: LanguageProficiencyWhereUniqueInput
    /**
     * In case the LanguageProficiency found by the `where` argument doesn't exist, create a new LanguageProficiency with this data.
     */
    create: XOR<LanguageProficiencyCreateInput, LanguageProficiencyUncheckedCreateInput>
    /**
     * In case the LanguageProficiency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageProficiencyUpdateInput, LanguageProficiencyUncheckedUpdateInput>
  }

  /**
   * LanguageProficiency delete
   */
  export type LanguageProficiencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
    /**
     * Filter which LanguageProficiency to delete.
     */
    where: LanguageProficiencyWhereUniqueInput
  }

  /**
   * LanguageProficiency deleteMany
   */
  export type LanguageProficiencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LanguageProficiencies to delete
     */
    where?: LanguageProficiencyWhereInput
    /**
     * Limit how many LanguageProficiencies to delete.
     */
    limit?: number
  }

  /**
   * LanguageProficiency without action
   */
  export type LanguageProficiencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageProficiency
     */
    select?: LanguageProficiencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LanguageProficiency
     */
    omit?: LanguageProficiencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageProficiencyInclude<ExtArgs> | null
  }


  /**
   * Model ComputerSkill
   */

  export type AggregateComputerSkill = {
    _count: ComputerSkillCountAggregateOutputType | null
    _avg: ComputerSkillAvgAggregateOutputType | null
    _sum: ComputerSkillSumAggregateOutputType | null
    _min: ComputerSkillMinAggregateOutputType | null
    _max: ComputerSkillMaxAggregateOutputType | null
  }

  export type ComputerSkillAvgAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type ComputerSkillSumAggregateOutputType = {
    id: number | null
    applicantId: number | null
  }

  export type ComputerSkillMinAggregateOutputType = {
    id: number | null
    skill: string | null
    proficiency: string | null
    applicantId: number | null
  }

  export type ComputerSkillMaxAggregateOutputType = {
    id: number | null
    skill: string | null
    proficiency: string | null
    applicantId: number | null
  }

  export type ComputerSkillCountAggregateOutputType = {
    id: number
    skill: number
    proficiency: number
    applicantId: number
    _all: number
  }


  export type ComputerSkillAvgAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type ComputerSkillSumAggregateInputType = {
    id?: true
    applicantId?: true
  }

  export type ComputerSkillMinAggregateInputType = {
    id?: true
    skill?: true
    proficiency?: true
    applicantId?: true
  }

  export type ComputerSkillMaxAggregateInputType = {
    id?: true
    skill?: true
    proficiency?: true
    applicantId?: true
  }

  export type ComputerSkillCountAggregateInputType = {
    id?: true
    skill?: true
    proficiency?: true
    applicantId?: true
    _all?: true
  }

  export type ComputerSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComputerSkill to aggregate.
     */
    where?: ComputerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComputerSkills to fetch.
     */
    orderBy?: ComputerSkillOrderByWithRelationInput | ComputerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComputerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComputerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComputerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComputerSkills
    **/
    _count?: true | ComputerSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComputerSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComputerSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComputerSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComputerSkillMaxAggregateInputType
  }

  export type GetComputerSkillAggregateType<T extends ComputerSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateComputerSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComputerSkill[P]>
      : GetScalarType<T[P], AggregateComputerSkill[P]>
  }




  export type ComputerSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComputerSkillWhereInput
    orderBy?: ComputerSkillOrderByWithAggregationInput | ComputerSkillOrderByWithAggregationInput[]
    by: ComputerSkillScalarFieldEnum[] | ComputerSkillScalarFieldEnum
    having?: ComputerSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComputerSkillCountAggregateInputType | true
    _avg?: ComputerSkillAvgAggregateInputType
    _sum?: ComputerSkillSumAggregateInputType
    _min?: ComputerSkillMinAggregateInputType
    _max?: ComputerSkillMaxAggregateInputType
  }

  export type ComputerSkillGroupByOutputType = {
    id: number
    skill: string
    proficiency: string
    applicantId: number
    _count: ComputerSkillCountAggregateOutputType | null
    _avg: ComputerSkillAvgAggregateOutputType | null
    _sum: ComputerSkillSumAggregateOutputType | null
    _min: ComputerSkillMinAggregateOutputType | null
    _max: ComputerSkillMaxAggregateOutputType | null
  }

  type GetComputerSkillGroupByPayload<T extends ComputerSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComputerSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComputerSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComputerSkillGroupByOutputType[P]>
            : GetScalarType<T[P], ComputerSkillGroupByOutputType[P]>
        }
      >
    >


  export type ComputerSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skill?: boolean
    proficiency?: boolean
    applicantId?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["computerSkill"]>



  export type ComputerSkillSelectScalar = {
    id?: boolean
    skill?: boolean
    proficiency?: boolean
    applicantId?: boolean
  }

  export type ComputerSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skill" | "proficiency" | "applicantId", ExtArgs["result"]["computerSkill"]>
  export type ComputerSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }

  export type $ComputerSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComputerSkill"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skill: string
      proficiency: string
      applicantId: number
    }, ExtArgs["result"]["computerSkill"]>
    composites: {}
  }

  type ComputerSkillGetPayload<S extends boolean | null | undefined | ComputerSkillDefaultArgs> = $Result.GetResult<Prisma.$ComputerSkillPayload, S>

  type ComputerSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComputerSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComputerSkillCountAggregateInputType | true
    }

  export interface ComputerSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComputerSkill'], meta: { name: 'ComputerSkill' } }
    /**
     * Find zero or one ComputerSkill that matches the filter.
     * @param {ComputerSkillFindUniqueArgs} args - Arguments to find a ComputerSkill
     * @example
     * // Get one ComputerSkill
     * const computerSkill = await prisma.computerSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComputerSkillFindUniqueArgs>(args: SelectSubset<T, ComputerSkillFindUniqueArgs<ExtArgs>>): Prisma__ComputerSkillClient<$Result.GetResult<Prisma.$ComputerSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComputerSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComputerSkillFindUniqueOrThrowArgs} args - Arguments to find a ComputerSkill
     * @example
     * // Get one ComputerSkill
     * const computerSkill = await prisma.computerSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComputerSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, ComputerSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComputerSkillClient<$Result.GetResult<Prisma.$ComputerSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComputerSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerSkillFindFirstArgs} args - Arguments to find a ComputerSkill
     * @example
     * // Get one ComputerSkill
     * const computerSkill = await prisma.computerSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComputerSkillFindFirstArgs>(args?: SelectSubset<T, ComputerSkillFindFirstArgs<ExtArgs>>): Prisma__ComputerSkillClient<$Result.GetResult<Prisma.$ComputerSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComputerSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerSkillFindFirstOrThrowArgs} args - Arguments to find a ComputerSkill
     * @example
     * // Get one ComputerSkill
     * const computerSkill = await prisma.computerSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComputerSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, ComputerSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComputerSkillClient<$Result.GetResult<Prisma.$ComputerSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComputerSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComputerSkills
     * const computerSkills = await prisma.computerSkill.findMany()
     * 
     * // Get first 10 ComputerSkills
     * const computerSkills = await prisma.computerSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const computerSkillWithIdOnly = await prisma.computerSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComputerSkillFindManyArgs>(args?: SelectSubset<T, ComputerSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComputerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComputerSkill.
     * @param {ComputerSkillCreateArgs} args - Arguments to create a ComputerSkill.
     * @example
     * // Create one ComputerSkill
     * const ComputerSkill = await prisma.computerSkill.create({
     *   data: {
     *     // ... data to create a ComputerSkill
     *   }
     * })
     * 
     */
    create<T extends ComputerSkillCreateArgs>(args: SelectSubset<T, ComputerSkillCreateArgs<ExtArgs>>): Prisma__ComputerSkillClient<$Result.GetResult<Prisma.$ComputerSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComputerSkills.
     * @param {ComputerSkillCreateManyArgs} args - Arguments to create many ComputerSkills.
     * @example
     * // Create many ComputerSkills
     * const computerSkill = await prisma.computerSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComputerSkillCreateManyArgs>(args?: SelectSubset<T, ComputerSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ComputerSkill.
     * @param {ComputerSkillDeleteArgs} args - Arguments to delete one ComputerSkill.
     * @example
     * // Delete one ComputerSkill
     * const ComputerSkill = await prisma.computerSkill.delete({
     *   where: {
     *     // ... filter to delete one ComputerSkill
     *   }
     * })
     * 
     */
    delete<T extends ComputerSkillDeleteArgs>(args: SelectSubset<T, ComputerSkillDeleteArgs<ExtArgs>>): Prisma__ComputerSkillClient<$Result.GetResult<Prisma.$ComputerSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComputerSkill.
     * @param {ComputerSkillUpdateArgs} args - Arguments to update one ComputerSkill.
     * @example
     * // Update one ComputerSkill
     * const computerSkill = await prisma.computerSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComputerSkillUpdateArgs>(args: SelectSubset<T, ComputerSkillUpdateArgs<ExtArgs>>): Prisma__ComputerSkillClient<$Result.GetResult<Prisma.$ComputerSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComputerSkills.
     * @param {ComputerSkillDeleteManyArgs} args - Arguments to filter ComputerSkills to delete.
     * @example
     * // Delete a few ComputerSkills
     * const { count } = await prisma.computerSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComputerSkillDeleteManyArgs>(args?: SelectSubset<T, ComputerSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComputerSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComputerSkills
     * const computerSkill = await prisma.computerSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComputerSkillUpdateManyArgs>(args: SelectSubset<T, ComputerSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ComputerSkill.
     * @param {ComputerSkillUpsertArgs} args - Arguments to update or create a ComputerSkill.
     * @example
     * // Update or create a ComputerSkill
     * const computerSkill = await prisma.computerSkill.upsert({
     *   create: {
     *     // ... data to create a ComputerSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComputerSkill we want to update
     *   }
     * })
     */
    upsert<T extends ComputerSkillUpsertArgs>(args: SelectSubset<T, ComputerSkillUpsertArgs<ExtArgs>>): Prisma__ComputerSkillClient<$Result.GetResult<Prisma.$ComputerSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComputerSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerSkillCountArgs} args - Arguments to filter ComputerSkills to count.
     * @example
     * // Count the number of ComputerSkills
     * const count = await prisma.computerSkill.count({
     *   where: {
     *     // ... the filter for the ComputerSkills we want to count
     *   }
     * })
    **/
    count<T extends ComputerSkillCountArgs>(
      args?: Subset<T, ComputerSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComputerSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComputerSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComputerSkillAggregateArgs>(args: Subset<T, ComputerSkillAggregateArgs>): Prisma.PrismaPromise<GetComputerSkillAggregateType<T>>

    /**
     * Group by ComputerSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComputerSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComputerSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComputerSkillGroupByArgs['orderBy'] }
        : { orderBy?: ComputerSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComputerSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComputerSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComputerSkill model
   */
  readonly fields: ComputerSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComputerSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComputerSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends ApplicantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicantDefaultArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ComputerSkill model
   */
  interface ComputerSkillFieldRefs {
    readonly id: FieldRef<"ComputerSkill", 'Int'>
    readonly skill: FieldRef<"ComputerSkill", 'String'>
    readonly proficiency: FieldRef<"ComputerSkill", 'String'>
    readonly applicantId: FieldRef<"ComputerSkill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ComputerSkill findUnique
   */
  export type ComputerSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
    /**
     * Filter, which ComputerSkill to fetch.
     */
    where: ComputerSkillWhereUniqueInput
  }

  /**
   * ComputerSkill findUniqueOrThrow
   */
  export type ComputerSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
    /**
     * Filter, which ComputerSkill to fetch.
     */
    where: ComputerSkillWhereUniqueInput
  }

  /**
   * ComputerSkill findFirst
   */
  export type ComputerSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
    /**
     * Filter, which ComputerSkill to fetch.
     */
    where?: ComputerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComputerSkills to fetch.
     */
    orderBy?: ComputerSkillOrderByWithRelationInput | ComputerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComputerSkills.
     */
    cursor?: ComputerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComputerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComputerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComputerSkills.
     */
    distinct?: ComputerSkillScalarFieldEnum | ComputerSkillScalarFieldEnum[]
  }

  /**
   * ComputerSkill findFirstOrThrow
   */
  export type ComputerSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
    /**
     * Filter, which ComputerSkill to fetch.
     */
    where?: ComputerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComputerSkills to fetch.
     */
    orderBy?: ComputerSkillOrderByWithRelationInput | ComputerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComputerSkills.
     */
    cursor?: ComputerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComputerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComputerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComputerSkills.
     */
    distinct?: ComputerSkillScalarFieldEnum | ComputerSkillScalarFieldEnum[]
  }

  /**
   * ComputerSkill findMany
   */
  export type ComputerSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
    /**
     * Filter, which ComputerSkills to fetch.
     */
    where?: ComputerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComputerSkills to fetch.
     */
    orderBy?: ComputerSkillOrderByWithRelationInput | ComputerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComputerSkills.
     */
    cursor?: ComputerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComputerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComputerSkills.
     */
    skip?: number
    distinct?: ComputerSkillScalarFieldEnum | ComputerSkillScalarFieldEnum[]
  }

  /**
   * ComputerSkill create
   */
  export type ComputerSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a ComputerSkill.
     */
    data: XOR<ComputerSkillCreateInput, ComputerSkillUncheckedCreateInput>
  }

  /**
   * ComputerSkill createMany
   */
  export type ComputerSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComputerSkills.
     */
    data: ComputerSkillCreateManyInput | ComputerSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComputerSkill update
   */
  export type ComputerSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a ComputerSkill.
     */
    data: XOR<ComputerSkillUpdateInput, ComputerSkillUncheckedUpdateInput>
    /**
     * Choose, which ComputerSkill to update.
     */
    where: ComputerSkillWhereUniqueInput
  }

  /**
   * ComputerSkill updateMany
   */
  export type ComputerSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComputerSkills.
     */
    data: XOR<ComputerSkillUpdateManyMutationInput, ComputerSkillUncheckedUpdateManyInput>
    /**
     * Filter which ComputerSkills to update
     */
    where?: ComputerSkillWhereInput
    /**
     * Limit how many ComputerSkills to update.
     */
    limit?: number
  }

  /**
   * ComputerSkill upsert
   */
  export type ComputerSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the ComputerSkill to update in case it exists.
     */
    where: ComputerSkillWhereUniqueInput
    /**
     * In case the ComputerSkill found by the `where` argument doesn't exist, create a new ComputerSkill with this data.
     */
    create: XOR<ComputerSkillCreateInput, ComputerSkillUncheckedCreateInput>
    /**
     * In case the ComputerSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComputerSkillUpdateInput, ComputerSkillUncheckedUpdateInput>
  }

  /**
   * ComputerSkill delete
   */
  export type ComputerSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
    /**
     * Filter which ComputerSkill to delete.
     */
    where: ComputerSkillWhereUniqueInput
  }

  /**
   * ComputerSkill deleteMany
   */
  export type ComputerSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComputerSkills to delete
     */
    where?: ComputerSkillWhereInput
    /**
     * Limit how many ComputerSkills to delete.
     */
    limit?: number
  }

  /**
   * ComputerSkill without action
   */
  export type ComputerSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComputerSkill
     */
    select?: ComputerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComputerSkill
     */
    omit?: ComputerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComputerSkillInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    agentId: number | null
  }

  export type ChatRoomSumAggregateOutputType = {
    id: number | null
    userId: number | null
    agentId: number | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: number | null
    userId: number | null
    agentId: number | null
    topic: string | null
    status: string | null
    createdAt: Date | null
    endedAt: Date | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    agentId: number | null
    topic: string | null
    status: string | null
    createdAt: Date | null
    endedAt: Date | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    userId: number
    agentId: number
    topic: number
    status: number
    createdAt: number
    endedAt: number
    _all: number
  }


  export type ChatRoomAvgAggregateInputType = {
    id?: true
    userId?: true
    agentId?: true
  }

  export type ChatRoomSumAggregateInputType = {
    id?: true
    userId?: true
    agentId?: true
  }

  export type ChatRoomMinAggregateInputType = {
    id?: true
    userId?: true
    agentId?: true
    topic?: true
    status?: true
    createdAt?: true
    endedAt?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    userId?: true
    agentId?: true
    topic?: true
    status?: true
    createdAt?: true
    endedAt?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    userId?: true
    agentId?: true
    topic?: true
    status?: true
    createdAt?: true
    endedAt?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _avg?: ChatRoomAvgAggregateInputType
    _sum?: ChatRoomSumAggregateInputType
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: number
    userId: number
    agentId: number | null
    topic: string | null
    status: string
    createdAt: Date
    endedAt: Date | null
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    agentId?: boolean
    topic?: boolean
    status?: boolean
    createdAt?: boolean
    endedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    agent?: boolean | ChatRoom$agentArgs<ExtArgs>
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>



  export type ChatRoomSelectScalar = {
    id?: boolean
    userId?: boolean
    agentId?: boolean
    topic?: boolean
    status?: boolean
    createdAt?: boolean
    endedAt?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "agentId" | "topic" | "status" | "createdAt" | "endedAt", ExtArgs["result"]["chatRoom"]>
  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    agent?: boolean | ChatRoom$agentArgs<ExtArgs>
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      agent: Prisma.$UserPayload<ExtArgs> | null
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      agentId: number | null
      topic: string | null
      status: string
      createdAt: Date
      endedAt: Date | null
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
     */
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends ChatRoom$agentArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$agentArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends ChatRoom$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'Int'>
    readonly userId: FieldRef<"ChatRoom", 'Int'>
    readonly agentId: FieldRef<"ChatRoom", 'Int'>
    readonly topic: FieldRef<"ChatRoom", 'String'>
    readonly status: FieldRef<"ChatRoom", 'String'>
    readonly createdAt: FieldRef<"ChatRoom", 'DateTime'>
    readonly endedAt: FieldRef<"ChatRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom.agent
   */
  export type ChatRoom$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ChatRoom.messages
   */
  export type ChatRoom$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    senderId: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    senderId: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    senderId: number | null
    message: string | null
    type: string | null
    isRead: boolean | null
    readAt: Date | null
    timestamp: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    senderId: number | null
    message: string | null
    type: string | null
    isRead: boolean | null
    readAt: Date | null
    timestamp: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    roomId: number
    senderId: number
    message: number
    type: number
    isRead: number
    readAt: number
    timestamp: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
  }

  export type ChatMessageSumAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
  }

  export type ChatMessageMinAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    message?: true
    type?: true
    isRead?: true
    readAt?: true
    timestamp?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    message?: true
    type?: true
    isRead?: true
    readAt?: true
    timestamp?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    message?: true
    type?: true
    isRead?: true
    readAt?: true
    timestamp?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: number
    roomId: number
    senderId: number | null
    message: string
    type: string
    isRead: boolean
    readAt: Date | null
    timestamp: Date
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    readAt?: boolean
    timestamp?: boolean
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | ChatMessage$senderArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>



  export type ChatMessageSelectScalar = {
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    readAt?: boolean
    timestamp?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "senderId" | "message" | "type" | "isRead" | "readAt" | "timestamp", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | ChatMessage$senderArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      room: Prisma.$ChatRoomPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      senderId: number | null
      message: string
      type: string
      isRead: boolean
      readAt: Date | null
      timestamp: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends ChatMessage$senderArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$senderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'Int'>
    readonly roomId: FieldRef<"ChatMessage", 'Int'>
    readonly senderId: FieldRef<"ChatMessage", 'Int'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly type: FieldRef<"ChatMessage", 'String'>
    readonly isRead: FieldRef<"ChatMessage", 'Boolean'>
    readonly readAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly timestamp: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage.sender
   */
  export type ChatMessage$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model MarketTrend
   */

  export type AggregateMarketTrend = {
    _count: MarketTrendCountAggregateOutputType | null
    _avg: MarketTrendAvgAggregateOutputType | null
    _sum: MarketTrendSumAggregateOutputType | null
    _min: MarketTrendMinAggregateOutputType | null
    _max: MarketTrendMaxAggregateOutputType | null
  }

  export type MarketTrendAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type MarketTrendSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type MarketTrendMinAggregateOutputType = {
    id: number | null
    industry: string | null
    metric: string | null
    value: number | null
    period: string | null
    date: Date | null
    source: string | null
    createdAt: Date | null
  }

  export type MarketTrendMaxAggregateOutputType = {
    id: number | null
    industry: string | null
    metric: string | null
    value: number | null
    period: string | null
    date: Date | null
    source: string | null
    createdAt: Date | null
  }

  export type MarketTrendCountAggregateOutputType = {
    id: number
    industry: number
    metric: number
    value: number
    period: number
    date: number
    source: number
    createdAt: number
    _all: number
  }


  export type MarketTrendAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type MarketTrendSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type MarketTrendMinAggregateInputType = {
    id?: true
    industry?: true
    metric?: true
    value?: true
    period?: true
    date?: true
    source?: true
    createdAt?: true
  }

  export type MarketTrendMaxAggregateInputType = {
    id?: true
    industry?: true
    metric?: true
    value?: true
    period?: true
    date?: true
    source?: true
    createdAt?: true
  }

  export type MarketTrendCountAggregateInputType = {
    id?: true
    industry?: true
    metric?: true
    value?: true
    period?: true
    date?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type MarketTrendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketTrend to aggregate.
     */
    where?: MarketTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketTrends to fetch.
     */
    orderBy?: MarketTrendOrderByWithRelationInput | MarketTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketTrends
    **/
    _count?: true | MarketTrendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketTrendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketTrendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketTrendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketTrendMaxAggregateInputType
  }

  export type GetMarketTrendAggregateType<T extends MarketTrendAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketTrend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketTrend[P]>
      : GetScalarType<T[P], AggregateMarketTrend[P]>
  }




  export type MarketTrendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketTrendWhereInput
    orderBy?: MarketTrendOrderByWithAggregationInput | MarketTrendOrderByWithAggregationInput[]
    by: MarketTrendScalarFieldEnum[] | MarketTrendScalarFieldEnum
    having?: MarketTrendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketTrendCountAggregateInputType | true
    _avg?: MarketTrendAvgAggregateInputType
    _sum?: MarketTrendSumAggregateInputType
    _min?: MarketTrendMinAggregateInputType
    _max?: MarketTrendMaxAggregateInputType
  }

  export type MarketTrendGroupByOutputType = {
    id: number
    industry: string
    metric: string
    value: number
    period: string
    date: Date
    source: string | null
    createdAt: Date
    _count: MarketTrendCountAggregateOutputType | null
    _avg: MarketTrendAvgAggregateOutputType | null
    _sum: MarketTrendSumAggregateOutputType | null
    _min: MarketTrendMinAggregateOutputType | null
    _max: MarketTrendMaxAggregateOutputType | null
  }

  type GetMarketTrendGroupByPayload<T extends MarketTrendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketTrendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketTrendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketTrendGroupByOutputType[P]>
            : GetScalarType<T[P], MarketTrendGroupByOutputType[P]>
        }
      >
    >


  export type MarketTrendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    metric?: boolean
    value?: boolean
    period?: boolean
    date?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketTrend"]>



  export type MarketTrendSelectScalar = {
    id?: boolean
    industry?: boolean
    metric?: boolean
    value?: boolean
    period?: boolean
    date?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type MarketTrendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "industry" | "metric" | "value" | "period" | "date" | "source" | "createdAt", ExtArgs["result"]["marketTrend"]>

  export type $MarketTrendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketTrend"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      industry: string
      metric: string
      value: number
      period: string
      date: Date
      source: string | null
      createdAt: Date
    }, ExtArgs["result"]["marketTrend"]>
    composites: {}
  }

  type MarketTrendGetPayload<S extends boolean | null | undefined | MarketTrendDefaultArgs> = $Result.GetResult<Prisma.$MarketTrendPayload, S>

  type MarketTrendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketTrendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketTrendCountAggregateInputType | true
    }

  export interface MarketTrendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketTrend'], meta: { name: 'MarketTrend' } }
    /**
     * Find zero or one MarketTrend that matches the filter.
     * @param {MarketTrendFindUniqueArgs} args - Arguments to find a MarketTrend
     * @example
     * // Get one MarketTrend
     * const marketTrend = await prisma.marketTrend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketTrendFindUniqueArgs>(args: SelectSubset<T, MarketTrendFindUniqueArgs<ExtArgs>>): Prisma__MarketTrendClient<$Result.GetResult<Prisma.$MarketTrendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketTrend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketTrendFindUniqueOrThrowArgs} args - Arguments to find a MarketTrend
     * @example
     * // Get one MarketTrend
     * const marketTrend = await prisma.marketTrend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketTrendFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketTrendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketTrendClient<$Result.GetResult<Prisma.$MarketTrendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketTrend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTrendFindFirstArgs} args - Arguments to find a MarketTrend
     * @example
     * // Get one MarketTrend
     * const marketTrend = await prisma.marketTrend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketTrendFindFirstArgs>(args?: SelectSubset<T, MarketTrendFindFirstArgs<ExtArgs>>): Prisma__MarketTrendClient<$Result.GetResult<Prisma.$MarketTrendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketTrend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTrendFindFirstOrThrowArgs} args - Arguments to find a MarketTrend
     * @example
     * // Get one MarketTrend
     * const marketTrend = await prisma.marketTrend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketTrendFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketTrendFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketTrendClient<$Result.GetResult<Prisma.$MarketTrendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketTrends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTrendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketTrends
     * const marketTrends = await prisma.marketTrend.findMany()
     * 
     * // Get first 10 MarketTrends
     * const marketTrends = await prisma.marketTrend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketTrendWithIdOnly = await prisma.marketTrend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketTrendFindManyArgs>(args?: SelectSubset<T, MarketTrendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketTrendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketTrend.
     * @param {MarketTrendCreateArgs} args - Arguments to create a MarketTrend.
     * @example
     * // Create one MarketTrend
     * const MarketTrend = await prisma.marketTrend.create({
     *   data: {
     *     // ... data to create a MarketTrend
     *   }
     * })
     * 
     */
    create<T extends MarketTrendCreateArgs>(args: SelectSubset<T, MarketTrendCreateArgs<ExtArgs>>): Prisma__MarketTrendClient<$Result.GetResult<Prisma.$MarketTrendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketTrends.
     * @param {MarketTrendCreateManyArgs} args - Arguments to create many MarketTrends.
     * @example
     * // Create many MarketTrends
     * const marketTrend = await prisma.marketTrend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketTrendCreateManyArgs>(args?: SelectSubset<T, MarketTrendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MarketTrend.
     * @param {MarketTrendDeleteArgs} args - Arguments to delete one MarketTrend.
     * @example
     * // Delete one MarketTrend
     * const MarketTrend = await prisma.marketTrend.delete({
     *   where: {
     *     // ... filter to delete one MarketTrend
     *   }
     * })
     * 
     */
    delete<T extends MarketTrendDeleteArgs>(args: SelectSubset<T, MarketTrendDeleteArgs<ExtArgs>>): Prisma__MarketTrendClient<$Result.GetResult<Prisma.$MarketTrendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketTrend.
     * @param {MarketTrendUpdateArgs} args - Arguments to update one MarketTrend.
     * @example
     * // Update one MarketTrend
     * const marketTrend = await prisma.marketTrend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketTrendUpdateArgs>(args: SelectSubset<T, MarketTrendUpdateArgs<ExtArgs>>): Prisma__MarketTrendClient<$Result.GetResult<Prisma.$MarketTrendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketTrends.
     * @param {MarketTrendDeleteManyArgs} args - Arguments to filter MarketTrends to delete.
     * @example
     * // Delete a few MarketTrends
     * const { count } = await prisma.marketTrend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketTrendDeleteManyArgs>(args?: SelectSubset<T, MarketTrendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTrendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketTrends
     * const marketTrend = await prisma.marketTrend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketTrendUpdateManyArgs>(args: SelectSubset<T, MarketTrendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarketTrend.
     * @param {MarketTrendUpsertArgs} args - Arguments to update or create a MarketTrend.
     * @example
     * // Update or create a MarketTrend
     * const marketTrend = await prisma.marketTrend.upsert({
     *   create: {
     *     // ... data to create a MarketTrend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketTrend we want to update
     *   }
     * })
     */
    upsert<T extends MarketTrendUpsertArgs>(args: SelectSubset<T, MarketTrendUpsertArgs<ExtArgs>>): Prisma__MarketTrendClient<$Result.GetResult<Prisma.$MarketTrendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketTrends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTrendCountArgs} args - Arguments to filter MarketTrends to count.
     * @example
     * // Count the number of MarketTrends
     * const count = await prisma.marketTrend.count({
     *   where: {
     *     // ... the filter for the MarketTrends we want to count
     *   }
     * })
    **/
    count<T extends MarketTrendCountArgs>(
      args?: Subset<T, MarketTrendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketTrendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTrendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketTrendAggregateArgs>(args: Subset<T, MarketTrendAggregateArgs>): Prisma.PrismaPromise<GetMarketTrendAggregateType<T>>

    /**
     * Group by MarketTrend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketTrendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketTrendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketTrendGroupByArgs['orderBy'] }
        : { orderBy?: MarketTrendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketTrendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketTrendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketTrend model
   */
  readonly fields: MarketTrendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketTrend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketTrendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketTrend model
   */
  interface MarketTrendFieldRefs {
    readonly id: FieldRef<"MarketTrend", 'Int'>
    readonly industry: FieldRef<"MarketTrend", 'String'>
    readonly metric: FieldRef<"MarketTrend", 'String'>
    readonly value: FieldRef<"MarketTrend", 'Float'>
    readonly period: FieldRef<"MarketTrend", 'String'>
    readonly date: FieldRef<"MarketTrend", 'DateTime'>
    readonly source: FieldRef<"MarketTrend", 'String'>
    readonly createdAt: FieldRef<"MarketTrend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketTrend findUnique
   */
  export type MarketTrendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTrend
     */
    select?: MarketTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTrend
     */
    omit?: MarketTrendOmit<ExtArgs> | null
    /**
     * Filter, which MarketTrend to fetch.
     */
    where: MarketTrendWhereUniqueInput
  }

  /**
   * MarketTrend findUniqueOrThrow
   */
  export type MarketTrendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTrend
     */
    select?: MarketTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTrend
     */
    omit?: MarketTrendOmit<ExtArgs> | null
    /**
     * Filter, which MarketTrend to fetch.
     */
    where: MarketTrendWhereUniqueInput
  }

  /**
   * MarketTrend findFirst
   */
  export type MarketTrendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTrend
     */
    select?: MarketTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTrend
     */
    omit?: MarketTrendOmit<ExtArgs> | null
    /**
     * Filter, which MarketTrend to fetch.
     */
    where?: MarketTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketTrends to fetch.
     */
    orderBy?: MarketTrendOrderByWithRelationInput | MarketTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketTrends.
     */
    cursor?: MarketTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketTrends.
     */
    distinct?: MarketTrendScalarFieldEnum | MarketTrendScalarFieldEnum[]
  }

  /**
   * MarketTrend findFirstOrThrow
   */
  export type MarketTrendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTrend
     */
    select?: MarketTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTrend
     */
    omit?: MarketTrendOmit<ExtArgs> | null
    /**
     * Filter, which MarketTrend to fetch.
     */
    where?: MarketTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketTrends to fetch.
     */
    orderBy?: MarketTrendOrderByWithRelationInput | MarketTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketTrends.
     */
    cursor?: MarketTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketTrends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketTrends.
     */
    distinct?: MarketTrendScalarFieldEnum | MarketTrendScalarFieldEnum[]
  }

  /**
   * MarketTrend findMany
   */
  export type MarketTrendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTrend
     */
    select?: MarketTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTrend
     */
    omit?: MarketTrendOmit<ExtArgs> | null
    /**
     * Filter, which MarketTrends to fetch.
     */
    where?: MarketTrendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketTrends to fetch.
     */
    orderBy?: MarketTrendOrderByWithRelationInput | MarketTrendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketTrends.
     */
    cursor?: MarketTrendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketTrends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketTrends.
     */
    skip?: number
    distinct?: MarketTrendScalarFieldEnum | MarketTrendScalarFieldEnum[]
  }

  /**
   * MarketTrend create
   */
  export type MarketTrendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTrend
     */
    select?: MarketTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTrend
     */
    omit?: MarketTrendOmit<ExtArgs> | null
    /**
     * The data needed to create a MarketTrend.
     */
    data: XOR<MarketTrendCreateInput, MarketTrendUncheckedCreateInput>
  }

  /**
   * MarketTrend createMany
   */
  export type MarketTrendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketTrends.
     */
    data: MarketTrendCreateManyInput | MarketTrendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketTrend update
   */
  export type MarketTrendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTrend
     */
    select?: MarketTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTrend
     */
    omit?: MarketTrendOmit<ExtArgs> | null
    /**
     * The data needed to update a MarketTrend.
     */
    data: XOR<MarketTrendUpdateInput, MarketTrendUncheckedUpdateInput>
    /**
     * Choose, which MarketTrend to update.
     */
    where: MarketTrendWhereUniqueInput
  }

  /**
   * MarketTrend updateMany
   */
  export type MarketTrendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketTrends.
     */
    data: XOR<MarketTrendUpdateManyMutationInput, MarketTrendUncheckedUpdateManyInput>
    /**
     * Filter which MarketTrends to update
     */
    where?: MarketTrendWhereInput
    /**
     * Limit how many MarketTrends to update.
     */
    limit?: number
  }

  /**
   * MarketTrend upsert
   */
  export type MarketTrendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTrend
     */
    select?: MarketTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTrend
     */
    omit?: MarketTrendOmit<ExtArgs> | null
    /**
     * The filter to search for the MarketTrend to update in case it exists.
     */
    where: MarketTrendWhereUniqueInput
    /**
     * In case the MarketTrend found by the `where` argument doesn't exist, create a new MarketTrend with this data.
     */
    create: XOR<MarketTrendCreateInput, MarketTrendUncheckedCreateInput>
    /**
     * In case the MarketTrend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketTrendUpdateInput, MarketTrendUncheckedUpdateInput>
  }

  /**
   * MarketTrend delete
   */
  export type MarketTrendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTrend
     */
    select?: MarketTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTrend
     */
    omit?: MarketTrendOmit<ExtArgs> | null
    /**
     * Filter which MarketTrend to delete.
     */
    where: MarketTrendWhereUniqueInput
  }

  /**
   * MarketTrend deleteMany
   */
  export type MarketTrendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketTrends to delete
     */
    where?: MarketTrendWhereInput
    /**
     * Limit how many MarketTrends to delete.
     */
    limit?: number
  }

  /**
   * MarketTrend without action
   */
  export type MarketTrendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketTrend
     */
    select?: MarketTrendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketTrend
     */
    omit?: MarketTrendOmit<ExtArgs> | null
  }


  /**
   * Model SkillDemand
   */

  export type AggregateSkillDemand = {
    _count: SkillDemandCountAggregateOutputType | null
    _avg: SkillDemandAvgAggregateOutputType | null
    _sum: SkillDemandSumAggregateOutputType | null
    _min: SkillDemandMinAggregateOutputType | null
    _max: SkillDemandMaxAggregateOutputType | null
  }

  export type SkillDemandAvgAggregateOutputType = {
    id: number | null
    demandScore: number | null
    growth: number | null
  }

  export type SkillDemandSumAggregateOutputType = {
    id: number | null
    demandScore: number | null
    growth: number | null
  }

  export type SkillDemandMinAggregateOutputType = {
    id: number | null
    skillName: string | null
    demandScore: number | null
    growth: number | null
    industry: string | null
    region: string | null
    period: Date | null
    createdAt: Date | null
  }

  export type SkillDemandMaxAggregateOutputType = {
    id: number | null
    skillName: string | null
    demandScore: number | null
    growth: number | null
    industry: string | null
    region: string | null
    period: Date | null
    createdAt: Date | null
  }

  export type SkillDemandCountAggregateOutputType = {
    id: number
    skillName: number
    demandScore: number
    growth: number
    industry: number
    region: number
    period: number
    createdAt: number
    _all: number
  }


  export type SkillDemandAvgAggregateInputType = {
    id?: true
    demandScore?: true
    growth?: true
  }

  export type SkillDemandSumAggregateInputType = {
    id?: true
    demandScore?: true
    growth?: true
  }

  export type SkillDemandMinAggregateInputType = {
    id?: true
    skillName?: true
    demandScore?: true
    growth?: true
    industry?: true
    region?: true
    period?: true
    createdAt?: true
  }

  export type SkillDemandMaxAggregateInputType = {
    id?: true
    skillName?: true
    demandScore?: true
    growth?: true
    industry?: true
    region?: true
    period?: true
    createdAt?: true
  }

  export type SkillDemandCountAggregateInputType = {
    id?: true
    skillName?: true
    demandScore?: true
    growth?: true
    industry?: true
    region?: true
    period?: true
    createdAt?: true
    _all?: true
  }

  export type SkillDemandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillDemand to aggregate.
     */
    where?: SkillDemandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillDemands to fetch.
     */
    orderBy?: SkillDemandOrderByWithRelationInput | SkillDemandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillDemandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillDemands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillDemands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillDemands
    **/
    _count?: true | SkillDemandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillDemandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillDemandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillDemandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillDemandMaxAggregateInputType
  }

  export type GetSkillDemandAggregateType<T extends SkillDemandAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillDemand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillDemand[P]>
      : GetScalarType<T[P], AggregateSkillDemand[P]>
  }




  export type SkillDemandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillDemandWhereInput
    orderBy?: SkillDemandOrderByWithAggregationInput | SkillDemandOrderByWithAggregationInput[]
    by: SkillDemandScalarFieldEnum[] | SkillDemandScalarFieldEnum
    having?: SkillDemandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillDemandCountAggregateInputType | true
    _avg?: SkillDemandAvgAggregateInputType
    _sum?: SkillDemandSumAggregateInputType
    _min?: SkillDemandMinAggregateInputType
    _max?: SkillDemandMaxAggregateInputType
  }

  export type SkillDemandGroupByOutputType = {
    id: number
    skillName: string
    demandScore: number
    growth: number
    industry: string | null
    region: string | null
    period: Date
    createdAt: Date
    _count: SkillDemandCountAggregateOutputType | null
    _avg: SkillDemandAvgAggregateOutputType | null
    _sum: SkillDemandSumAggregateOutputType | null
    _min: SkillDemandMinAggregateOutputType | null
    _max: SkillDemandMaxAggregateOutputType | null
  }

  type GetSkillDemandGroupByPayload<T extends SkillDemandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillDemandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillDemandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillDemandGroupByOutputType[P]>
            : GetScalarType<T[P], SkillDemandGroupByOutputType[P]>
        }
      >
    >


  export type SkillDemandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillName?: boolean
    demandScore?: boolean
    growth?: boolean
    industry?: boolean
    region?: boolean
    period?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["skillDemand"]>



  export type SkillDemandSelectScalar = {
    id?: boolean
    skillName?: boolean
    demandScore?: boolean
    growth?: boolean
    industry?: boolean
    region?: boolean
    period?: boolean
    createdAt?: boolean
  }

  export type SkillDemandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillName" | "demandScore" | "growth" | "industry" | "region" | "period" | "createdAt", ExtArgs["result"]["skillDemand"]>

  export type $SkillDemandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillDemand"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skillName: string
      demandScore: number
      growth: number
      industry: string | null
      region: string | null
      period: Date
      createdAt: Date
    }, ExtArgs["result"]["skillDemand"]>
    composites: {}
  }

  type SkillDemandGetPayload<S extends boolean | null | undefined | SkillDemandDefaultArgs> = $Result.GetResult<Prisma.$SkillDemandPayload, S>

  type SkillDemandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillDemandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillDemandCountAggregateInputType | true
    }

  export interface SkillDemandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillDemand'], meta: { name: 'SkillDemand' } }
    /**
     * Find zero or one SkillDemand that matches the filter.
     * @param {SkillDemandFindUniqueArgs} args - Arguments to find a SkillDemand
     * @example
     * // Get one SkillDemand
     * const skillDemand = await prisma.skillDemand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillDemandFindUniqueArgs>(args: SelectSubset<T, SkillDemandFindUniqueArgs<ExtArgs>>): Prisma__SkillDemandClient<$Result.GetResult<Prisma.$SkillDemandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillDemand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillDemandFindUniqueOrThrowArgs} args - Arguments to find a SkillDemand
     * @example
     * // Get one SkillDemand
     * const skillDemand = await prisma.skillDemand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillDemandFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillDemandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillDemandClient<$Result.GetResult<Prisma.$SkillDemandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillDemand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillDemandFindFirstArgs} args - Arguments to find a SkillDemand
     * @example
     * // Get one SkillDemand
     * const skillDemand = await prisma.skillDemand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillDemandFindFirstArgs>(args?: SelectSubset<T, SkillDemandFindFirstArgs<ExtArgs>>): Prisma__SkillDemandClient<$Result.GetResult<Prisma.$SkillDemandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillDemand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillDemandFindFirstOrThrowArgs} args - Arguments to find a SkillDemand
     * @example
     * // Get one SkillDemand
     * const skillDemand = await prisma.skillDemand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillDemandFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillDemandFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillDemandClient<$Result.GetResult<Prisma.$SkillDemandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillDemands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillDemandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillDemands
     * const skillDemands = await prisma.skillDemand.findMany()
     * 
     * // Get first 10 SkillDemands
     * const skillDemands = await prisma.skillDemand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillDemandWithIdOnly = await prisma.skillDemand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillDemandFindManyArgs>(args?: SelectSubset<T, SkillDemandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillDemandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillDemand.
     * @param {SkillDemandCreateArgs} args - Arguments to create a SkillDemand.
     * @example
     * // Create one SkillDemand
     * const SkillDemand = await prisma.skillDemand.create({
     *   data: {
     *     // ... data to create a SkillDemand
     *   }
     * })
     * 
     */
    create<T extends SkillDemandCreateArgs>(args: SelectSubset<T, SkillDemandCreateArgs<ExtArgs>>): Prisma__SkillDemandClient<$Result.GetResult<Prisma.$SkillDemandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillDemands.
     * @param {SkillDemandCreateManyArgs} args - Arguments to create many SkillDemands.
     * @example
     * // Create many SkillDemands
     * const skillDemand = await prisma.skillDemand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillDemandCreateManyArgs>(args?: SelectSubset<T, SkillDemandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SkillDemand.
     * @param {SkillDemandDeleteArgs} args - Arguments to delete one SkillDemand.
     * @example
     * // Delete one SkillDemand
     * const SkillDemand = await prisma.skillDemand.delete({
     *   where: {
     *     // ... filter to delete one SkillDemand
     *   }
     * })
     * 
     */
    delete<T extends SkillDemandDeleteArgs>(args: SelectSubset<T, SkillDemandDeleteArgs<ExtArgs>>): Prisma__SkillDemandClient<$Result.GetResult<Prisma.$SkillDemandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillDemand.
     * @param {SkillDemandUpdateArgs} args - Arguments to update one SkillDemand.
     * @example
     * // Update one SkillDemand
     * const skillDemand = await prisma.skillDemand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillDemandUpdateArgs>(args: SelectSubset<T, SkillDemandUpdateArgs<ExtArgs>>): Prisma__SkillDemandClient<$Result.GetResult<Prisma.$SkillDemandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillDemands.
     * @param {SkillDemandDeleteManyArgs} args - Arguments to filter SkillDemands to delete.
     * @example
     * // Delete a few SkillDemands
     * const { count } = await prisma.skillDemand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDemandDeleteManyArgs>(args?: SelectSubset<T, SkillDemandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillDemands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillDemandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillDemands
     * const skillDemand = await prisma.skillDemand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillDemandUpdateManyArgs>(args: SelectSubset<T, SkillDemandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SkillDemand.
     * @param {SkillDemandUpsertArgs} args - Arguments to update or create a SkillDemand.
     * @example
     * // Update or create a SkillDemand
     * const skillDemand = await prisma.skillDemand.upsert({
     *   create: {
     *     // ... data to create a SkillDemand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillDemand we want to update
     *   }
     * })
     */
    upsert<T extends SkillDemandUpsertArgs>(args: SelectSubset<T, SkillDemandUpsertArgs<ExtArgs>>): Prisma__SkillDemandClient<$Result.GetResult<Prisma.$SkillDemandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillDemands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillDemandCountArgs} args - Arguments to filter SkillDemands to count.
     * @example
     * // Count the number of SkillDemands
     * const count = await prisma.skillDemand.count({
     *   where: {
     *     // ... the filter for the SkillDemands we want to count
     *   }
     * })
    **/
    count<T extends SkillDemandCountArgs>(
      args?: Subset<T, SkillDemandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillDemandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillDemand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillDemandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillDemandAggregateArgs>(args: Subset<T, SkillDemandAggregateArgs>): Prisma.PrismaPromise<GetSkillDemandAggregateType<T>>

    /**
     * Group by SkillDemand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillDemandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillDemandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillDemandGroupByArgs['orderBy'] }
        : { orderBy?: SkillDemandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillDemandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillDemandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillDemand model
   */
  readonly fields: SkillDemandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillDemand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillDemandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkillDemand model
   */
  interface SkillDemandFieldRefs {
    readonly id: FieldRef<"SkillDemand", 'Int'>
    readonly skillName: FieldRef<"SkillDemand", 'String'>
    readonly demandScore: FieldRef<"SkillDemand", 'Float'>
    readonly growth: FieldRef<"SkillDemand", 'Float'>
    readonly industry: FieldRef<"SkillDemand", 'String'>
    readonly region: FieldRef<"SkillDemand", 'String'>
    readonly period: FieldRef<"SkillDemand", 'DateTime'>
    readonly createdAt: FieldRef<"SkillDemand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillDemand findUnique
   */
  export type SkillDemandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillDemand
     */
    select?: SkillDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillDemand
     */
    omit?: SkillDemandOmit<ExtArgs> | null
    /**
     * Filter, which SkillDemand to fetch.
     */
    where: SkillDemandWhereUniqueInput
  }

  /**
   * SkillDemand findUniqueOrThrow
   */
  export type SkillDemandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillDemand
     */
    select?: SkillDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillDemand
     */
    omit?: SkillDemandOmit<ExtArgs> | null
    /**
     * Filter, which SkillDemand to fetch.
     */
    where: SkillDemandWhereUniqueInput
  }

  /**
   * SkillDemand findFirst
   */
  export type SkillDemandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillDemand
     */
    select?: SkillDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillDemand
     */
    omit?: SkillDemandOmit<ExtArgs> | null
    /**
     * Filter, which SkillDemand to fetch.
     */
    where?: SkillDemandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillDemands to fetch.
     */
    orderBy?: SkillDemandOrderByWithRelationInput | SkillDemandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillDemands.
     */
    cursor?: SkillDemandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillDemands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillDemands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillDemands.
     */
    distinct?: SkillDemandScalarFieldEnum | SkillDemandScalarFieldEnum[]
  }

  /**
   * SkillDemand findFirstOrThrow
   */
  export type SkillDemandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillDemand
     */
    select?: SkillDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillDemand
     */
    omit?: SkillDemandOmit<ExtArgs> | null
    /**
     * Filter, which SkillDemand to fetch.
     */
    where?: SkillDemandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillDemands to fetch.
     */
    orderBy?: SkillDemandOrderByWithRelationInput | SkillDemandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillDemands.
     */
    cursor?: SkillDemandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillDemands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillDemands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillDemands.
     */
    distinct?: SkillDemandScalarFieldEnum | SkillDemandScalarFieldEnum[]
  }

  /**
   * SkillDemand findMany
   */
  export type SkillDemandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillDemand
     */
    select?: SkillDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillDemand
     */
    omit?: SkillDemandOmit<ExtArgs> | null
    /**
     * Filter, which SkillDemands to fetch.
     */
    where?: SkillDemandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillDemands to fetch.
     */
    orderBy?: SkillDemandOrderByWithRelationInput | SkillDemandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillDemands.
     */
    cursor?: SkillDemandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillDemands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillDemands.
     */
    skip?: number
    distinct?: SkillDemandScalarFieldEnum | SkillDemandScalarFieldEnum[]
  }

  /**
   * SkillDemand create
   */
  export type SkillDemandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillDemand
     */
    select?: SkillDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillDemand
     */
    omit?: SkillDemandOmit<ExtArgs> | null
    /**
     * The data needed to create a SkillDemand.
     */
    data: XOR<SkillDemandCreateInput, SkillDemandUncheckedCreateInput>
  }

  /**
   * SkillDemand createMany
   */
  export type SkillDemandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillDemands.
     */
    data: SkillDemandCreateManyInput | SkillDemandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillDemand update
   */
  export type SkillDemandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillDemand
     */
    select?: SkillDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillDemand
     */
    omit?: SkillDemandOmit<ExtArgs> | null
    /**
     * The data needed to update a SkillDemand.
     */
    data: XOR<SkillDemandUpdateInput, SkillDemandUncheckedUpdateInput>
    /**
     * Choose, which SkillDemand to update.
     */
    where: SkillDemandWhereUniqueInput
  }

  /**
   * SkillDemand updateMany
   */
  export type SkillDemandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillDemands.
     */
    data: XOR<SkillDemandUpdateManyMutationInput, SkillDemandUncheckedUpdateManyInput>
    /**
     * Filter which SkillDemands to update
     */
    where?: SkillDemandWhereInput
    /**
     * Limit how many SkillDemands to update.
     */
    limit?: number
  }

  /**
   * SkillDemand upsert
   */
  export type SkillDemandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillDemand
     */
    select?: SkillDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillDemand
     */
    omit?: SkillDemandOmit<ExtArgs> | null
    /**
     * The filter to search for the SkillDemand to update in case it exists.
     */
    where: SkillDemandWhereUniqueInput
    /**
     * In case the SkillDemand found by the `where` argument doesn't exist, create a new SkillDemand with this data.
     */
    create: XOR<SkillDemandCreateInput, SkillDemandUncheckedCreateInput>
    /**
     * In case the SkillDemand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillDemandUpdateInput, SkillDemandUncheckedUpdateInput>
  }

  /**
   * SkillDemand delete
   */
  export type SkillDemandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillDemand
     */
    select?: SkillDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillDemand
     */
    omit?: SkillDemandOmit<ExtArgs> | null
    /**
     * Filter which SkillDemand to delete.
     */
    where: SkillDemandWhereUniqueInput
  }

  /**
   * SkillDemand deleteMany
   */
  export type SkillDemandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillDemands to delete
     */
    where?: SkillDemandWhereInput
    /**
     * Limit how many SkillDemands to delete.
     */
    limit?: number
  }

  /**
   * SkillDemand without action
   */
  export type SkillDemandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillDemand
     */
    select?: SkillDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillDemand
     */
    omit?: SkillDemandOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    applicant?: boolean | User$applicantArgs<ExtArgs>
    employer?: boolean | User$employerArgs<ExtArgs>
    chatRooms?: boolean | User$chatRoomsArgs<ExtArgs>
    agentChats?: boolean | User$agentChatsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | User$applicantArgs<ExtArgs>
    employer?: boolean | User$employerArgs<ExtArgs>
    chatRooms?: boolean | User$chatRoomsArgs<ExtArgs>
    agentChats?: boolean | User$agentChatsArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs> | null
      employer: Prisma.$EmployerPayload<ExtArgs> | null
      chatRooms: Prisma.$ChatRoomPayload<ExtArgs>[]
      agentChats: Prisma.$ChatRoomPayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicant<T extends User$applicantArgs<ExtArgs> = {}>(args?: Subset<T, User$applicantArgs<ExtArgs>>): Prisma__ApplicantClient<$Result.GetResult<Prisma.$ApplicantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employer<T extends User$employerArgs<ExtArgs> = {}>(args?: Subset<T, User$employerArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chatRooms<T extends User$chatRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agentChats<T extends User$agentChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$agentChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.applicant
   */
  export type User$applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applicant
     */
    select?: ApplicantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applicant
     */
    omit?: ApplicantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicantInclude<ExtArgs> | null
    where?: ApplicantWhereInput
  }

  /**
   * User.employer
   */
  export type User$employerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    where?: EmployerWhereInput
  }

  /**
   * User.chatRooms
   */
  export type User$chatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * User.agentChats
   */
  export type User$agentChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const JobCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type JobCategoryScalarFieldEnum = (typeof JobCategoryScalarFieldEnum)[keyof typeof JobCategoryScalarFieldEnum]


  export const ApplicantScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    nida: 'nida',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ApplicantScalarFieldEnum = (typeof ApplicantScalarFieldEnum)[keyof typeof ApplicantScalarFieldEnum]


  export const EmployerScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    address: 'address',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type EmployerScalarFieldEnum = (typeof EmployerScalarFieldEnum)[keyof typeof EmployerScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    location: 'location',
    status: 'status',
    applicants: 'applicants',
    employerId: 'employerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    status: 'status',
    jobId: 'jobId',
    applicantId: 'applicantId',
    createdAt: 'createdAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt',
    readAt: 'readAt',
    expiresAt: 'expiresAt',
    applicantId: 'applicantId',
    employerId: 'employerId',
    applicationId: 'applicationId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const AcademicQualificationScalarFieldEnum: {
    id: 'id',
    level: 'level',
    country: 'country',
    institution: 'institution',
    fieldOfStudy: 'fieldOfStudy',
    startDate: 'startDate',
    endDate: 'endDate',
    certificateUrl: 'certificateUrl',
    applicantId: 'applicantId'
  };

  export type AcademicQualificationScalarFieldEnum = (typeof AcademicQualificationScalarFieldEnum)[keyof typeof AcademicQualificationScalarFieldEnum]


  export const WorkExperienceScalarFieldEnum: {
    id: 'id',
    institution: 'institution',
    institutionAddress: 'institutionAddress',
    jobTitle: 'jobTitle',
    startDate: 'startDate',
    endDate: 'endDate',
    duties: 'duties',
    supervisorName: 'supervisorName',
    supervisorTel: 'supervisorTel',
    supervisorAddress: 'supervisorAddress',
    applicantId: 'applicantId'
  };

  export type WorkExperienceScalarFieldEnum = (typeof WorkExperienceScalarFieldEnum)[keyof typeof WorkExperienceScalarFieldEnum]


  export const LanguageProficiencyScalarFieldEnum: {
    id: 'id',
    language: 'language',
    speak: 'speak',
    read: 'read',
    write: 'write',
    applicantId: 'applicantId'
  };

  export type LanguageProficiencyScalarFieldEnum = (typeof LanguageProficiencyScalarFieldEnum)[keyof typeof LanguageProficiencyScalarFieldEnum]


  export const ComputerSkillScalarFieldEnum: {
    id: 'id',
    skill: 'skill',
    proficiency: 'proficiency',
    applicantId: 'applicantId'
  };

  export type ComputerSkillScalarFieldEnum = (typeof ComputerSkillScalarFieldEnum)[keyof typeof ComputerSkillScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    agentId: 'agentId',
    topic: 'topic',
    status: 'status',
    createdAt: 'createdAt',
    endedAt: 'endedAt'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    senderId: 'senderId',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    readAt: 'readAt',
    timestamp: 'timestamp'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const MarketTrendScalarFieldEnum: {
    id: 'id',
    industry: 'industry',
    metric: 'metric',
    value: 'value',
    period: 'period',
    date: 'date',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type MarketTrendScalarFieldEnum = (typeof MarketTrendScalarFieldEnum)[keyof typeof MarketTrendScalarFieldEnum]


  export const SkillDemandScalarFieldEnum: {
    id: 'id',
    skillName: 'skillName',
    demandScore: 'demandScore',
    growth: 'growth',
    industry: 'industry',
    region: 'region',
    period: 'period',
    createdAt: 'createdAt'
  };

  export type SkillDemandScalarFieldEnum = (typeof SkillDemandScalarFieldEnum)[keyof typeof SkillDemandScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JobCategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type JobCategoryOrderByRelevanceFieldEnum = (typeof JobCategoryOrderByRelevanceFieldEnum)[keyof typeof JobCategoryOrderByRelevanceFieldEnum]


  export const ApplicantOrderByRelevanceFieldEnum: {
    fullName: 'fullName',
    nida: 'nida'
  };

  export type ApplicantOrderByRelevanceFieldEnum = (typeof ApplicantOrderByRelevanceFieldEnum)[keyof typeof ApplicantOrderByRelevanceFieldEnum]


  export const EmployerOrderByRelevanceFieldEnum: {
    companyName: 'companyName',
    address: 'address'
  };

  export type EmployerOrderByRelevanceFieldEnum = (typeof EmployerOrderByRelevanceFieldEnum)[keyof typeof EmployerOrderByRelevanceFieldEnum]


  export const JobOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    location: 'location',
    status: 'status'
  };

  export type JobOrderByRelevanceFieldEnum = (typeof JobOrderByRelevanceFieldEnum)[keyof typeof JobOrderByRelevanceFieldEnum]


  export const ApplicationOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type ApplicationOrderByRelevanceFieldEnum = (typeof ApplicationOrderByRelevanceFieldEnum)[keyof typeof ApplicationOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    title: 'title',
    message: 'message'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const AcademicQualificationOrderByRelevanceFieldEnum: {
    level: 'level',
    country: 'country',
    institution: 'institution',
    fieldOfStudy: 'fieldOfStudy',
    certificateUrl: 'certificateUrl'
  };

  export type AcademicQualificationOrderByRelevanceFieldEnum = (typeof AcademicQualificationOrderByRelevanceFieldEnum)[keyof typeof AcademicQualificationOrderByRelevanceFieldEnum]


  export const WorkExperienceOrderByRelevanceFieldEnum: {
    institution: 'institution',
    institutionAddress: 'institutionAddress',
    jobTitle: 'jobTitle',
    duties: 'duties',
    supervisorName: 'supervisorName',
    supervisorTel: 'supervisorTel',
    supervisorAddress: 'supervisorAddress'
  };

  export type WorkExperienceOrderByRelevanceFieldEnum = (typeof WorkExperienceOrderByRelevanceFieldEnum)[keyof typeof WorkExperienceOrderByRelevanceFieldEnum]


  export const LanguageProficiencyOrderByRelevanceFieldEnum: {
    language: 'language',
    speak: 'speak',
    read: 'read',
    write: 'write'
  };

  export type LanguageProficiencyOrderByRelevanceFieldEnum = (typeof LanguageProficiencyOrderByRelevanceFieldEnum)[keyof typeof LanguageProficiencyOrderByRelevanceFieldEnum]


  export const ComputerSkillOrderByRelevanceFieldEnum: {
    skill: 'skill',
    proficiency: 'proficiency'
  };

  export type ComputerSkillOrderByRelevanceFieldEnum = (typeof ComputerSkillOrderByRelevanceFieldEnum)[keyof typeof ComputerSkillOrderByRelevanceFieldEnum]


  export const ChatRoomOrderByRelevanceFieldEnum: {
    topic: 'topic',
    status: 'status'
  };

  export type ChatRoomOrderByRelevanceFieldEnum = (typeof ChatRoomOrderByRelevanceFieldEnum)[keyof typeof ChatRoomOrderByRelevanceFieldEnum]


  export const ChatMessageOrderByRelevanceFieldEnum: {
    message: 'message',
    type: 'type'
  };

  export type ChatMessageOrderByRelevanceFieldEnum = (typeof ChatMessageOrderByRelevanceFieldEnum)[keyof typeof ChatMessageOrderByRelevanceFieldEnum]


  export const MarketTrendOrderByRelevanceFieldEnum: {
    industry: 'industry',
    metric: 'metric',
    period: 'period',
    source: 'source'
  };

  export type MarketTrendOrderByRelevanceFieldEnum = (typeof MarketTrendOrderByRelevanceFieldEnum)[keyof typeof MarketTrendOrderByRelevanceFieldEnum]


  export const SkillDemandOrderByRelevanceFieldEnum: {
    skillName: 'skillName',
    industry: 'industry',
    region: 'region'
  };

  export type SkillDemandOrderByRelevanceFieldEnum = (typeof SkillDemandOrderByRelevanceFieldEnum)[keyof typeof SkillDemandOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    
  /**
   * Deep Input Types
   */


  export type JobCategoryWhereInput = {
    AND?: JobCategoryWhereInput | JobCategoryWhereInput[]
    OR?: JobCategoryWhereInput[]
    NOT?: JobCategoryWhereInput | JobCategoryWhereInput[]
    id?: IntFilter<"JobCategory"> | number
    name?: StringFilter<"JobCategory"> | string
    description?: StringNullableFilter<"JobCategory"> | string | null
    applicants?: ApplicantListRelationFilter
    jobs?: JobListRelationFilter
  }

  export type JobCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    applicants?: ApplicantOrderByRelationAggregateInput
    jobs?: JobOrderByRelationAggregateInput
    _relevance?: JobCategoryOrderByRelevanceInput
  }

  export type JobCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: JobCategoryWhereInput | JobCategoryWhereInput[]
    OR?: JobCategoryWhereInput[]
    NOT?: JobCategoryWhereInput | JobCategoryWhereInput[]
    description?: StringNullableFilter<"JobCategory"> | string | null
    applicants?: ApplicantListRelationFilter
    jobs?: JobListRelationFilter
  }, "id" | "name">

  export type JobCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: JobCategoryCountOrderByAggregateInput
    _avg?: JobCategoryAvgOrderByAggregateInput
    _max?: JobCategoryMaxOrderByAggregateInput
    _min?: JobCategoryMinOrderByAggregateInput
    _sum?: JobCategorySumOrderByAggregateInput
  }

  export type JobCategoryScalarWhereWithAggregatesInput = {
    AND?: JobCategoryScalarWhereWithAggregatesInput | JobCategoryScalarWhereWithAggregatesInput[]
    OR?: JobCategoryScalarWhereWithAggregatesInput[]
    NOT?: JobCategoryScalarWhereWithAggregatesInput | JobCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JobCategory"> | number
    name?: StringWithAggregatesFilter<"JobCategory"> | string
    description?: StringNullableWithAggregatesFilter<"JobCategory"> | string | null
  }

  export type ApplicantWhereInput = {
    AND?: ApplicantWhereInput | ApplicantWhereInput[]
    OR?: ApplicantWhereInput[]
    NOT?: ApplicantWhereInput | ApplicantWhereInput[]
    id?: IntFilter<"Applicant"> | number
    fullName?: StringFilter<"Applicant"> | string
    nida?: StringFilter<"Applicant"> | string
    userId?: IntFilter<"Applicant"> | number
    createdAt?: DateTimeFilter<"Applicant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    applications?: ApplicationListRelationFilter
    qualifications?: AcademicQualificationListRelationFilter
    experiences?: WorkExperienceListRelationFilter
    languages?: LanguageProficiencyListRelationFilter
    skills?: ComputerSkillListRelationFilter
    notifications?: NotificationListRelationFilter
    categories?: JobCategoryListRelationFilter
  }

  export type ApplicantOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    nida?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    qualifications?: AcademicQualificationOrderByRelationAggregateInput
    experiences?: WorkExperienceOrderByRelationAggregateInput
    languages?: LanguageProficiencyOrderByRelationAggregateInput
    skills?: ComputerSkillOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    categories?: JobCategoryOrderByRelationAggregateInput
    _relevance?: ApplicantOrderByRelevanceInput
  }

  export type ApplicantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nida?: string
    userId?: number
    AND?: ApplicantWhereInput | ApplicantWhereInput[]
    OR?: ApplicantWhereInput[]
    NOT?: ApplicantWhereInput | ApplicantWhereInput[]
    fullName?: StringFilter<"Applicant"> | string
    createdAt?: DateTimeFilter<"Applicant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    applications?: ApplicationListRelationFilter
    qualifications?: AcademicQualificationListRelationFilter
    experiences?: WorkExperienceListRelationFilter
    languages?: LanguageProficiencyListRelationFilter
    skills?: ComputerSkillListRelationFilter
    notifications?: NotificationListRelationFilter
    categories?: JobCategoryListRelationFilter
  }, "id" | "nida" | "userId">

  export type ApplicantOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    nida?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ApplicantCountOrderByAggregateInput
    _avg?: ApplicantAvgOrderByAggregateInput
    _max?: ApplicantMaxOrderByAggregateInput
    _min?: ApplicantMinOrderByAggregateInput
    _sum?: ApplicantSumOrderByAggregateInput
  }

  export type ApplicantScalarWhereWithAggregatesInput = {
    AND?: ApplicantScalarWhereWithAggregatesInput | ApplicantScalarWhereWithAggregatesInput[]
    OR?: ApplicantScalarWhereWithAggregatesInput[]
    NOT?: ApplicantScalarWhereWithAggregatesInput | ApplicantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Applicant"> | number
    fullName?: StringWithAggregatesFilter<"Applicant"> | string
    nida?: StringWithAggregatesFilter<"Applicant"> | string
    userId?: IntWithAggregatesFilter<"Applicant"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Applicant"> | Date | string
  }

  export type EmployerWhereInput = {
    AND?: EmployerWhereInput | EmployerWhereInput[]
    OR?: EmployerWhereInput[]
    NOT?: EmployerWhereInput | EmployerWhereInput[]
    id?: IntFilter<"Employer"> | number
    companyName?: StringFilter<"Employer"> | string
    address?: StringFilter<"Employer"> | string
    userId?: IntFilter<"Employer"> | number
    createdAt?: DateTimeFilter<"Employer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobs?: JobListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type EmployerOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    jobs?: JobOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: EmployerOrderByRelevanceInput
  }

  export type EmployerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: EmployerWhereInput | EmployerWhereInput[]
    OR?: EmployerWhereInput[]
    NOT?: EmployerWhereInput | EmployerWhereInput[]
    companyName?: StringFilter<"Employer"> | string
    address?: StringFilter<"Employer"> | string
    createdAt?: DateTimeFilter<"Employer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobs?: JobListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "userId">

  export type EmployerOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: EmployerCountOrderByAggregateInput
    _avg?: EmployerAvgOrderByAggregateInput
    _max?: EmployerMaxOrderByAggregateInput
    _min?: EmployerMinOrderByAggregateInput
    _sum?: EmployerSumOrderByAggregateInput
  }

  export type EmployerScalarWhereWithAggregatesInput = {
    AND?: EmployerScalarWhereWithAggregatesInput | EmployerScalarWhereWithAggregatesInput[]
    OR?: EmployerScalarWhereWithAggregatesInput[]
    NOT?: EmployerScalarWhereWithAggregatesInput | EmployerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employer"> | number
    companyName?: StringWithAggregatesFilter<"Employer"> | string
    address?: StringWithAggregatesFilter<"Employer"> | string
    userId?: IntWithAggregatesFilter<"Employer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Employer"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    location?: StringNullableFilter<"Job"> | string | null
    status?: StringFilter<"Job"> | string
    applicants?: IntFilter<"Job"> | number
    employerId?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    employer?: XOR<EmployerScalarRelationFilter, EmployerWhereInput>
    applications?: ApplicationListRelationFilter
    categories?: JobCategoryListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    applicants?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employer?: EmployerOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    categories?: JobCategoryOrderByRelationAggregateInput
    _relevance?: JobOrderByRelevanceInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    location?: StringNullableFilter<"Job"> | string | null
    status?: StringFilter<"Job"> | string
    applicants?: IntFilter<"Job"> | number
    employerId?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    employer?: XOR<EmployerScalarRelationFilter, EmployerWhereInput>
    applications?: ApplicationListRelationFilter
    categories?: JobCategoryListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    applicants?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Job"> | number
    title?: StringWithAggregatesFilter<"Job"> | string
    description?: StringWithAggregatesFilter<"Job"> | string
    location?: StringNullableWithAggregatesFilter<"Job"> | string | null
    status?: StringWithAggregatesFilter<"Job"> | string
    applicants?: IntWithAggregatesFilter<"Job"> | number
    employerId?: IntWithAggregatesFilter<"Job"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    status?: StringFilter<"Application"> | string
    jobId?: IntFilter<"Application"> | number
    applicantId?: IntFilter<"Application"> | number
    createdAt?: DateTimeFilter<"Application"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
    notifications?: NotificationListRelationFilter
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
    job?: JobOrderByWithRelationInput
    applicant?: ApplicantOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: ApplicationOrderByRelevanceInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    status?: StringFilter<"Application"> | string
    jobId?: IntFilter<"Application"> | number
    applicantId?: IntFilter<"Application"> | number
    createdAt?: DateTimeFilter<"Application"> | Date | string
    job?: XOR<JobScalarRelationFilter, JobWhereInput>
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
    notifications?: NotificationListRelationFilter
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Application"> | number
    status?: StringWithAggregatesFilter<"Application"> | string
    jobId?: IntWithAggregatesFilter<"Application"> | number
    applicantId?: IntWithAggregatesFilter<"Application"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    applicantId?: IntNullableFilter<"Notification"> | number | null
    employerId?: IntNullableFilter<"Notification"> | number | null
    applicationId?: IntNullableFilter<"Notification"> | number | null
    applicant?: XOR<ApplicantNullableScalarRelationFilter, ApplicantWhereInput> | null
    employer?: XOR<EmployerNullableScalarRelationFilter, EmployerWhereInput> | null
    application?: XOR<ApplicationNullableScalarRelationFilter, ApplicationWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    applicantId?: SortOrderInput | SortOrder
    employerId?: SortOrderInput | SortOrder
    applicationId?: SortOrderInput | SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    employer?: EmployerOrderByWithRelationInput
    application?: ApplicationOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    applicantId?: IntNullableFilter<"Notification"> | number | null
    employerId?: IntNullableFilter<"Notification"> | number | null
    applicationId?: IntNullableFilter<"Notification"> | number | null
    applicant?: XOR<ApplicantNullableScalarRelationFilter, ApplicantWhereInput> | null
    employer?: XOR<EmployerNullableScalarRelationFilter, EmployerWhereInput> | null
    application?: XOR<ApplicationNullableScalarRelationFilter, ApplicationWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    applicantId?: SortOrderInput | SortOrder
    employerId?: SortOrderInput | SortOrder
    applicationId?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    applicantId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    employerId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    applicationId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
  }

  export type AcademicQualificationWhereInput = {
    AND?: AcademicQualificationWhereInput | AcademicQualificationWhereInput[]
    OR?: AcademicQualificationWhereInput[]
    NOT?: AcademicQualificationWhereInput | AcademicQualificationWhereInput[]
    id?: IntFilter<"AcademicQualification"> | number
    level?: StringFilter<"AcademicQualification"> | string
    country?: StringFilter<"AcademicQualification"> | string
    institution?: StringFilter<"AcademicQualification"> | string
    fieldOfStudy?: StringFilter<"AcademicQualification"> | string
    startDate?: DateTimeFilter<"AcademicQualification"> | Date | string
    endDate?: DateTimeNullableFilter<"AcademicQualification"> | Date | string | null
    certificateUrl?: StringNullableFilter<"AcademicQualification"> | string | null
    applicantId?: IntFilter<"AcademicQualification"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type AcademicQualificationOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    country?: SortOrder
    institution?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    certificateUrl?: SortOrderInput | SortOrder
    applicantId?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    _relevance?: AcademicQualificationOrderByRelevanceInput
  }

  export type AcademicQualificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AcademicQualificationWhereInput | AcademicQualificationWhereInput[]
    OR?: AcademicQualificationWhereInput[]
    NOT?: AcademicQualificationWhereInput | AcademicQualificationWhereInput[]
    level?: StringFilter<"AcademicQualification"> | string
    country?: StringFilter<"AcademicQualification"> | string
    institution?: StringFilter<"AcademicQualification"> | string
    fieldOfStudy?: StringFilter<"AcademicQualification"> | string
    startDate?: DateTimeFilter<"AcademicQualification"> | Date | string
    endDate?: DateTimeNullableFilter<"AcademicQualification"> | Date | string | null
    certificateUrl?: StringNullableFilter<"AcademicQualification"> | string | null
    applicantId?: IntFilter<"AcademicQualification"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id">

  export type AcademicQualificationOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    country?: SortOrder
    institution?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    certificateUrl?: SortOrderInput | SortOrder
    applicantId?: SortOrder
    _count?: AcademicQualificationCountOrderByAggregateInput
    _avg?: AcademicQualificationAvgOrderByAggregateInput
    _max?: AcademicQualificationMaxOrderByAggregateInput
    _min?: AcademicQualificationMinOrderByAggregateInput
    _sum?: AcademicQualificationSumOrderByAggregateInput
  }

  export type AcademicQualificationScalarWhereWithAggregatesInput = {
    AND?: AcademicQualificationScalarWhereWithAggregatesInput | AcademicQualificationScalarWhereWithAggregatesInput[]
    OR?: AcademicQualificationScalarWhereWithAggregatesInput[]
    NOT?: AcademicQualificationScalarWhereWithAggregatesInput | AcademicQualificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AcademicQualification"> | number
    level?: StringWithAggregatesFilter<"AcademicQualification"> | string
    country?: StringWithAggregatesFilter<"AcademicQualification"> | string
    institution?: StringWithAggregatesFilter<"AcademicQualification"> | string
    fieldOfStudy?: StringWithAggregatesFilter<"AcademicQualification"> | string
    startDate?: DateTimeWithAggregatesFilter<"AcademicQualification"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"AcademicQualification"> | Date | string | null
    certificateUrl?: StringNullableWithAggregatesFilter<"AcademicQualification"> | string | null
    applicantId?: IntWithAggregatesFilter<"AcademicQualification"> | number
  }

  export type WorkExperienceWhereInput = {
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    id?: IntFilter<"WorkExperience"> | number
    institution?: StringFilter<"WorkExperience"> | string
    institutionAddress?: StringNullableFilter<"WorkExperience"> | string | null
    jobTitle?: StringFilter<"WorkExperience"> | string
    startDate?: DateTimeFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    duties?: StringNullableFilter<"WorkExperience"> | string | null
    supervisorName?: StringNullableFilter<"WorkExperience"> | string | null
    supervisorTel?: StringNullableFilter<"WorkExperience"> | string | null
    supervisorAddress?: StringNullableFilter<"WorkExperience"> | string | null
    applicantId?: IntFilter<"WorkExperience"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type WorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    institution?: SortOrder
    institutionAddress?: SortOrderInput | SortOrder
    jobTitle?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    duties?: SortOrderInput | SortOrder
    supervisorName?: SortOrderInput | SortOrder
    supervisorTel?: SortOrderInput | SortOrder
    supervisorAddress?: SortOrderInput | SortOrder
    applicantId?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    _relevance?: WorkExperienceOrderByRelevanceInput
  }

  export type WorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    institution?: StringFilter<"WorkExperience"> | string
    institutionAddress?: StringNullableFilter<"WorkExperience"> | string | null
    jobTitle?: StringFilter<"WorkExperience"> | string
    startDate?: DateTimeFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    duties?: StringNullableFilter<"WorkExperience"> | string | null
    supervisorName?: StringNullableFilter<"WorkExperience"> | string | null
    supervisorTel?: StringNullableFilter<"WorkExperience"> | string | null
    supervisorAddress?: StringNullableFilter<"WorkExperience"> | string | null
    applicantId?: IntFilter<"WorkExperience"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id">

  export type WorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    institution?: SortOrder
    institutionAddress?: SortOrderInput | SortOrder
    jobTitle?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    duties?: SortOrderInput | SortOrder
    supervisorName?: SortOrderInput | SortOrder
    supervisorTel?: SortOrderInput | SortOrder
    supervisorAddress?: SortOrderInput | SortOrder
    applicantId?: SortOrder
    _count?: WorkExperienceCountOrderByAggregateInput
    _avg?: WorkExperienceAvgOrderByAggregateInput
    _max?: WorkExperienceMaxOrderByAggregateInput
    _min?: WorkExperienceMinOrderByAggregateInput
    _sum?: WorkExperienceSumOrderByAggregateInput
  }

  export type WorkExperienceScalarWhereWithAggregatesInput = {
    AND?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    OR?: WorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: WorkExperienceScalarWhereWithAggregatesInput | WorkExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkExperience"> | number
    institution?: StringWithAggregatesFilter<"WorkExperience"> | string
    institutionAddress?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    jobTitle?: StringWithAggregatesFilter<"WorkExperience"> | string
    startDate?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"WorkExperience"> | Date | string | null
    duties?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    supervisorName?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    supervisorTel?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    supervisorAddress?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    applicantId?: IntWithAggregatesFilter<"WorkExperience"> | number
  }

  export type LanguageProficiencyWhereInput = {
    AND?: LanguageProficiencyWhereInput | LanguageProficiencyWhereInput[]
    OR?: LanguageProficiencyWhereInput[]
    NOT?: LanguageProficiencyWhereInput | LanguageProficiencyWhereInput[]
    id?: IntFilter<"LanguageProficiency"> | number
    language?: StringFilter<"LanguageProficiency"> | string
    speak?: StringFilter<"LanguageProficiency"> | string
    read?: StringFilter<"LanguageProficiency"> | string
    write?: StringFilter<"LanguageProficiency"> | string
    applicantId?: IntFilter<"LanguageProficiency"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type LanguageProficiencyOrderByWithRelationInput = {
    id?: SortOrder
    language?: SortOrder
    speak?: SortOrder
    read?: SortOrder
    write?: SortOrder
    applicantId?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    _relevance?: LanguageProficiencyOrderByRelevanceInput
  }

  export type LanguageProficiencyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LanguageProficiencyWhereInput | LanguageProficiencyWhereInput[]
    OR?: LanguageProficiencyWhereInput[]
    NOT?: LanguageProficiencyWhereInput | LanguageProficiencyWhereInput[]
    language?: StringFilter<"LanguageProficiency"> | string
    speak?: StringFilter<"LanguageProficiency"> | string
    read?: StringFilter<"LanguageProficiency"> | string
    write?: StringFilter<"LanguageProficiency"> | string
    applicantId?: IntFilter<"LanguageProficiency"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id">

  export type LanguageProficiencyOrderByWithAggregationInput = {
    id?: SortOrder
    language?: SortOrder
    speak?: SortOrder
    read?: SortOrder
    write?: SortOrder
    applicantId?: SortOrder
    _count?: LanguageProficiencyCountOrderByAggregateInput
    _avg?: LanguageProficiencyAvgOrderByAggregateInput
    _max?: LanguageProficiencyMaxOrderByAggregateInput
    _min?: LanguageProficiencyMinOrderByAggregateInput
    _sum?: LanguageProficiencySumOrderByAggregateInput
  }

  export type LanguageProficiencyScalarWhereWithAggregatesInput = {
    AND?: LanguageProficiencyScalarWhereWithAggregatesInput | LanguageProficiencyScalarWhereWithAggregatesInput[]
    OR?: LanguageProficiencyScalarWhereWithAggregatesInput[]
    NOT?: LanguageProficiencyScalarWhereWithAggregatesInput | LanguageProficiencyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LanguageProficiency"> | number
    language?: StringWithAggregatesFilter<"LanguageProficiency"> | string
    speak?: StringWithAggregatesFilter<"LanguageProficiency"> | string
    read?: StringWithAggregatesFilter<"LanguageProficiency"> | string
    write?: StringWithAggregatesFilter<"LanguageProficiency"> | string
    applicantId?: IntWithAggregatesFilter<"LanguageProficiency"> | number
  }

  export type ComputerSkillWhereInput = {
    AND?: ComputerSkillWhereInput | ComputerSkillWhereInput[]
    OR?: ComputerSkillWhereInput[]
    NOT?: ComputerSkillWhereInput | ComputerSkillWhereInput[]
    id?: IntFilter<"ComputerSkill"> | number
    skill?: StringFilter<"ComputerSkill"> | string
    proficiency?: StringFilter<"ComputerSkill"> | string
    applicantId?: IntFilter<"ComputerSkill"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type ComputerSkillOrderByWithRelationInput = {
    id?: SortOrder
    skill?: SortOrder
    proficiency?: SortOrder
    applicantId?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    _relevance?: ComputerSkillOrderByRelevanceInput
  }

  export type ComputerSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComputerSkillWhereInput | ComputerSkillWhereInput[]
    OR?: ComputerSkillWhereInput[]
    NOT?: ComputerSkillWhereInput | ComputerSkillWhereInput[]
    skill?: StringFilter<"ComputerSkill"> | string
    proficiency?: StringFilter<"ComputerSkill"> | string
    applicantId?: IntFilter<"ComputerSkill"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id">

  export type ComputerSkillOrderByWithAggregationInput = {
    id?: SortOrder
    skill?: SortOrder
    proficiency?: SortOrder
    applicantId?: SortOrder
    _count?: ComputerSkillCountOrderByAggregateInput
    _avg?: ComputerSkillAvgOrderByAggregateInput
    _max?: ComputerSkillMaxOrderByAggregateInput
    _min?: ComputerSkillMinOrderByAggregateInput
    _sum?: ComputerSkillSumOrderByAggregateInput
  }

  export type ComputerSkillScalarWhereWithAggregatesInput = {
    AND?: ComputerSkillScalarWhereWithAggregatesInput | ComputerSkillScalarWhereWithAggregatesInput[]
    OR?: ComputerSkillScalarWhereWithAggregatesInput[]
    NOT?: ComputerSkillScalarWhereWithAggregatesInput | ComputerSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ComputerSkill"> | number
    skill?: StringWithAggregatesFilter<"ComputerSkill"> | string
    proficiency?: StringWithAggregatesFilter<"ComputerSkill"> | string
    applicantId?: IntWithAggregatesFilter<"ComputerSkill"> | number
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: IntFilter<"ChatRoom"> | number
    userId?: IntFilter<"ChatRoom"> | number
    agentId?: IntNullableFilter<"ChatRoom"> | number | null
    topic?: StringNullableFilter<"ChatRoom"> | string | null
    status?: StringFilter<"ChatRoom"> | string
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    endedAt?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    agent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    messages?: ChatMessageListRelationFilter
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    agent?: UserOrderByWithRelationInput
    messages?: ChatMessageOrderByRelationAggregateInput
    _relevance?: ChatRoomOrderByRelevanceInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    userId?: IntFilter<"ChatRoom"> | number
    agentId?: IntNullableFilter<"ChatRoom"> | number | null
    topic?: StringNullableFilter<"ChatRoom"> | string | null
    status?: StringFilter<"ChatRoom"> | string
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    endedAt?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    agent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    topic?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _avg?: ChatRoomAvgOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
    _sum?: ChatRoomSumOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatRoom"> | number
    userId?: IntWithAggregatesFilter<"ChatRoom"> | number
    agentId?: IntNullableWithAggregatesFilter<"ChatRoom"> | number | null
    topic?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    status?: StringWithAggregatesFilter<"ChatRoom"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"ChatRoom"> | Date | string | null
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    roomId?: IntFilter<"ChatMessage"> | number
    senderId?: IntNullableFilter<"ChatMessage"> | number | null
    message?: StringFilter<"ChatMessage"> | string
    type?: StringFilter<"ChatMessage"> | string
    isRead?: BoolFilter<"ChatMessage"> | boolean
    readAt?: DateTimeNullableFilter<"ChatMessage"> | Date | string | null
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
    room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    room?: ChatRoomOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    _relevance?: ChatMessageOrderByRelevanceInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    roomId?: IntFilter<"ChatMessage"> | number
    senderId?: IntNullableFilter<"ChatMessage"> | number | null
    message?: StringFilter<"ChatMessage"> | string
    type?: StringFilter<"ChatMessage"> | string
    isRead?: BoolFilter<"ChatMessage"> | boolean
    readAt?: DateTimeNullableFilter<"ChatMessage"> | Date | string | null
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
    room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    sender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrderInput | SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _avg?: ChatMessageAvgOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
    _sum?: ChatMessageSumOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessage"> | number
    roomId?: IntWithAggregatesFilter<"ChatMessage"> | number
    senderId?: IntNullableWithAggregatesFilter<"ChatMessage"> | number | null
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    type?: StringWithAggregatesFilter<"ChatMessage"> | string
    isRead?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"ChatMessage"> | Date | string | null
    timestamp?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type MarketTrendWhereInput = {
    AND?: MarketTrendWhereInput | MarketTrendWhereInput[]
    OR?: MarketTrendWhereInput[]
    NOT?: MarketTrendWhereInput | MarketTrendWhereInput[]
    id?: IntFilter<"MarketTrend"> | number
    industry?: StringFilter<"MarketTrend"> | string
    metric?: StringFilter<"MarketTrend"> | string
    value?: FloatFilter<"MarketTrend"> | number
    period?: StringFilter<"MarketTrend"> | string
    date?: DateTimeFilter<"MarketTrend"> | Date | string
    source?: StringNullableFilter<"MarketTrend"> | string | null
    createdAt?: DateTimeFilter<"MarketTrend"> | Date | string
  }

  export type MarketTrendOrderByWithRelationInput = {
    id?: SortOrder
    industry?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    period?: SortOrder
    date?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _relevance?: MarketTrendOrderByRelevanceInput
  }

  export type MarketTrendWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MarketTrendWhereInput | MarketTrendWhereInput[]
    OR?: MarketTrendWhereInput[]
    NOT?: MarketTrendWhereInput | MarketTrendWhereInput[]
    industry?: StringFilter<"MarketTrend"> | string
    metric?: StringFilter<"MarketTrend"> | string
    value?: FloatFilter<"MarketTrend"> | number
    period?: StringFilter<"MarketTrend"> | string
    date?: DateTimeFilter<"MarketTrend"> | Date | string
    source?: StringNullableFilter<"MarketTrend"> | string | null
    createdAt?: DateTimeFilter<"MarketTrend"> | Date | string
  }, "id">

  export type MarketTrendOrderByWithAggregationInput = {
    id?: SortOrder
    industry?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    period?: SortOrder
    date?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MarketTrendCountOrderByAggregateInput
    _avg?: MarketTrendAvgOrderByAggregateInput
    _max?: MarketTrendMaxOrderByAggregateInput
    _min?: MarketTrendMinOrderByAggregateInput
    _sum?: MarketTrendSumOrderByAggregateInput
  }

  export type MarketTrendScalarWhereWithAggregatesInput = {
    AND?: MarketTrendScalarWhereWithAggregatesInput | MarketTrendScalarWhereWithAggregatesInput[]
    OR?: MarketTrendScalarWhereWithAggregatesInput[]
    NOT?: MarketTrendScalarWhereWithAggregatesInput | MarketTrendScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MarketTrend"> | number
    industry?: StringWithAggregatesFilter<"MarketTrend"> | string
    metric?: StringWithAggregatesFilter<"MarketTrend"> | string
    value?: FloatWithAggregatesFilter<"MarketTrend"> | number
    period?: StringWithAggregatesFilter<"MarketTrend"> | string
    date?: DateTimeWithAggregatesFilter<"MarketTrend"> | Date | string
    source?: StringNullableWithAggregatesFilter<"MarketTrend"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MarketTrend"> | Date | string
  }

  export type SkillDemandWhereInput = {
    AND?: SkillDemandWhereInput | SkillDemandWhereInput[]
    OR?: SkillDemandWhereInput[]
    NOT?: SkillDemandWhereInput | SkillDemandWhereInput[]
    id?: IntFilter<"SkillDemand"> | number
    skillName?: StringFilter<"SkillDemand"> | string
    demandScore?: FloatFilter<"SkillDemand"> | number
    growth?: FloatFilter<"SkillDemand"> | number
    industry?: StringNullableFilter<"SkillDemand"> | string | null
    region?: StringNullableFilter<"SkillDemand"> | string | null
    period?: DateTimeFilter<"SkillDemand"> | Date | string
    createdAt?: DateTimeFilter<"SkillDemand"> | Date | string
  }

  export type SkillDemandOrderByWithRelationInput = {
    id?: SortOrder
    skillName?: SortOrder
    demandScore?: SortOrder
    growth?: SortOrder
    industry?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    period?: SortOrder
    createdAt?: SortOrder
    _relevance?: SkillDemandOrderByRelevanceInput
  }

  export type SkillDemandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillDemandWhereInput | SkillDemandWhereInput[]
    OR?: SkillDemandWhereInput[]
    NOT?: SkillDemandWhereInput | SkillDemandWhereInput[]
    skillName?: StringFilter<"SkillDemand"> | string
    demandScore?: FloatFilter<"SkillDemand"> | number
    growth?: FloatFilter<"SkillDemand"> | number
    industry?: StringNullableFilter<"SkillDemand"> | string | null
    region?: StringNullableFilter<"SkillDemand"> | string | null
    period?: DateTimeFilter<"SkillDemand"> | Date | string
    createdAt?: DateTimeFilter<"SkillDemand"> | Date | string
  }, "id">

  export type SkillDemandOrderByWithAggregationInput = {
    id?: SortOrder
    skillName?: SortOrder
    demandScore?: SortOrder
    growth?: SortOrder
    industry?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    period?: SortOrder
    createdAt?: SortOrder
    _count?: SkillDemandCountOrderByAggregateInput
    _avg?: SkillDemandAvgOrderByAggregateInput
    _max?: SkillDemandMaxOrderByAggregateInput
    _min?: SkillDemandMinOrderByAggregateInput
    _sum?: SkillDemandSumOrderByAggregateInput
  }

  export type SkillDemandScalarWhereWithAggregatesInput = {
    AND?: SkillDemandScalarWhereWithAggregatesInput | SkillDemandScalarWhereWithAggregatesInput[]
    OR?: SkillDemandScalarWhereWithAggregatesInput[]
    NOT?: SkillDemandScalarWhereWithAggregatesInput | SkillDemandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SkillDemand"> | number
    skillName?: StringWithAggregatesFilter<"SkillDemand"> | string
    demandScore?: FloatWithAggregatesFilter<"SkillDemand"> | number
    growth?: FloatWithAggregatesFilter<"SkillDemand"> | number
    industry?: StringNullableWithAggregatesFilter<"SkillDemand"> | string | null
    region?: StringNullableWithAggregatesFilter<"SkillDemand"> | string | null
    period?: DateTimeWithAggregatesFilter<"SkillDemand"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SkillDemand"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applicant?: XOR<ApplicantNullableScalarRelationFilter, ApplicantWhereInput> | null
    employer?: XOR<EmployerNullableScalarRelationFilter, EmployerWhereInput> | null
    chatRooms?: ChatRoomListRelationFilter
    agentChats?: ChatRoomListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    employer?: EmployerOrderByWithRelationInput
    chatRooms?: ChatRoomOrderByRelationAggregateInput
    agentChats?: ChatRoomOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    applicant?: XOR<ApplicantNullableScalarRelationFilter, ApplicantWhereInput> | null
    employer?: XOR<EmployerNullableScalarRelationFilter, EmployerWhereInput> | null
    chatRooms?: ChatRoomListRelationFilter
    agentChats?: ChatRoomListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type JobCategoryCreateInput = {
    name: string
    description?: string | null
    applicants?: ApplicantCreateNestedManyWithoutCategoriesInput
    jobs?: JobCreateNestedManyWithoutCategoriesInput
  }

  export type JobCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    applicants?: ApplicantUncheckedCreateNestedManyWithoutCategoriesInput
    jobs?: JobUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type JobCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicants?: ApplicantUpdateManyWithoutCategoriesNestedInput
    jobs?: JobUpdateManyWithoutCategoriesNestedInput
  }

  export type JobCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicants?: ApplicantUncheckedUpdateManyWithoutCategoriesNestedInput
    jobs?: JobUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type JobCategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type JobCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicantCreateInput = {
    fullName: string
    nida: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillCreateNestedManyWithoutApplicantInput
    notifications?: NotificationCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantUncheckedCreateInput = {
    id?: number
    fullName: string
    nida: string
    userId: number
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationUncheckedCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyUncheckedCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUncheckedUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUncheckedUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUncheckedUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantCreateManyInput = {
    id?: number
    fullName: string
    nida: string
    userId: number
    createdAt?: Date | string
  }

  export type ApplicantUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployerCreateInput = {
    companyName: string
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmployerInput
    jobs?: JobCreateNestedManyWithoutEmployerInput
    notifications?: NotificationCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUncheckedCreateInput = {
    id?: number
    companyName: string
    address: string
    userId: number
    createdAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutEmployerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployerNestedInput
    jobs?: JobUpdateManyWithoutEmployerNestedInput
    notifications?: NotificationUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutEmployerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerCreateManyInput = {
    id?: number
    companyName: string
    address: string
    userId: number
    createdAt?: Date | string
  }

  export type EmployerUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    title: string
    description: string
    location?: string | null
    status?: string
    applicants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: EmployerCreateNestedOneWithoutJobsInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
    categories?: JobCategoryCreateNestedManyWithoutJobsInput
  }

  export type JobUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    applicants?: number
    employerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
    categories?: JobCategoryUncheckedCreateNestedManyWithoutJobsInput
  }

  export type JobUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUpdateOneRequiredWithoutJobsNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
    categories?: JobCategoryUpdateManyWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    employerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
    categories?: JobCategoryUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type JobCreateManyInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    applicants?: number
    employerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    employerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    status?: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
    applicant: ApplicantCreateNestedOneWithoutApplicationsInput
    notifications?: NotificationCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    status?: string
    jobId: number
    applicantId: number
    createdAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    applicant?: ApplicantUpdateOneRequiredWithoutApplicationsNestedInput
    notifications?: NotificationUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    jobId?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: number
    status?: string
    jobId: number
    applicantId: number
    createdAt?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    jobId?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    applicant?: ApplicantCreateNestedOneWithoutNotificationsInput
    employer?: EmployerCreateNestedOneWithoutNotificationsInput
    application?: ApplicationCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    applicantId?: number | null
    employerId?: number | null
    applicationId?: number | null
  }

  export type NotificationUpdateInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicant?: ApplicantUpdateOneWithoutNotificationsNestedInput
    employer?: EmployerUpdateOneWithoutNotificationsNestedInput
    application?: ApplicationUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicantId?: NullableIntFieldUpdateOperationsInput | number | null
    employerId?: NullableIntFieldUpdateOperationsInput | number | null
    applicationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationCreateManyInput = {
    id?: number
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    applicantId?: number | null
    employerId?: number | null
    applicationId?: number | null
  }

  export type NotificationUpdateManyMutationInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicantId?: NullableIntFieldUpdateOperationsInput | number | null
    employerId?: NullableIntFieldUpdateOperationsInput | number | null
    applicationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AcademicQualificationCreateInput = {
    level: string
    country: string
    institution: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    certificateUrl?: string | null
    applicant: ApplicantCreateNestedOneWithoutQualificationsInput
  }

  export type AcademicQualificationUncheckedCreateInput = {
    id?: number
    level: string
    country: string
    institution: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    certificateUrl?: string | null
    applicantId: number
  }

  export type AcademicQualificationUpdateInput = {
    level?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicant?: ApplicantUpdateOneRequiredWithoutQualificationsNestedInput
  }

  export type AcademicQualificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type AcademicQualificationCreateManyInput = {
    id?: number
    level: string
    country: string
    institution: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    certificateUrl?: string | null
    applicantId: number
  }

  export type AcademicQualificationUpdateManyMutationInput = {
    level?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AcademicQualificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkExperienceCreateInput = {
    institution: string
    institutionAddress?: string | null
    jobTitle: string
    startDate: Date | string
    endDate?: Date | string | null
    duties?: string | null
    supervisorName?: string | null
    supervisorTel?: string | null
    supervisorAddress?: string | null
    applicant: ApplicantCreateNestedOneWithoutExperiencesInput
  }

  export type WorkExperienceUncheckedCreateInput = {
    id?: number
    institution: string
    institutionAddress?: string | null
    jobTitle: string
    startDate: Date | string
    endDate?: Date | string | null
    duties?: string | null
    supervisorName?: string | null
    supervisorTel?: string | null
    supervisorAddress?: string | null
    applicantId: number
  }

  export type WorkExperienceUpdateInput = {
    institution?: StringFieldUpdateOperationsInput | string
    institutionAddress?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duties?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorTel?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorAddress?: NullableStringFieldUpdateOperationsInput | string | null
    applicant?: ApplicantUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type WorkExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    institutionAddress?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duties?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorTel?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorAddress?: NullableStringFieldUpdateOperationsInput | string | null
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkExperienceCreateManyInput = {
    id?: number
    institution: string
    institutionAddress?: string | null
    jobTitle: string
    startDate: Date | string
    endDate?: Date | string | null
    duties?: string | null
    supervisorName?: string | null
    supervisorTel?: string | null
    supervisorAddress?: string | null
    applicantId: number
  }

  export type WorkExperienceUpdateManyMutationInput = {
    institution?: StringFieldUpdateOperationsInput | string
    institutionAddress?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duties?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorTel?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    institutionAddress?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duties?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorTel?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorAddress?: NullableStringFieldUpdateOperationsInput | string | null
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type LanguageProficiencyCreateInput = {
    language: string
    speak: string
    read: string
    write: string
    applicant: ApplicantCreateNestedOneWithoutLanguagesInput
  }

  export type LanguageProficiencyUncheckedCreateInput = {
    id?: number
    language: string
    speak: string
    read: string
    write: string
    applicantId: number
  }

  export type LanguageProficiencyUpdateInput = {
    language?: StringFieldUpdateOperationsInput | string
    speak?: StringFieldUpdateOperationsInput | string
    read?: StringFieldUpdateOperationsInput | string
    write?: StringFieldUpdateOperationsInput | string
    applicant?: ApplicantUpdateOneRequiredWithoutLanguagesNestedInput
  }

  export type LanguageProficiencyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    speak?: StringFieldUpdateOperationsInput | string
    read?: StringFieldUpdateOperationsInput | string
    write?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type LanguageProficiencyCreateManyInput = {
    id?: number
    language: string
    speak: string
    read: string
    write: string
    applicantId: number
  }

  export type LanguageProficiencyUpdateManyMutationInput = {
    language?: StringFieldUpdateOperationsInput | string
    speak?: StringFieldUpdateOperationsInput | string
    read?: StringFieldUpdateOperationsInput | string
    write?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageProficiencyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    speak?: StringFieldUpdateOperationsInput | string
    read?: StringFieldUpdateOperationsInput | string
    write?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type ComputerSkillCreateInput = {
    skill: string
    proficiency: string
    applicant: ApplicantCreateNestedOneWithoutSkillsInput
  }

  export type ComputerSkillUncheckedCreateInput = {
    id?: number
    skill: string
    proficiency: string
    applicantId: number
  }

  export type ComputerSkillUpdateInput = {
    skill?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    applicant?: ApplicantUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type ComputerSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type ComputerSkillCreateManyInput = {
    id?: number
    skill: string
    proficiency: string
    applicantId: number
  }

  export type ComputerSkillUpdateManyMutationInput = {
    skill?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
  }

  export type ComputerSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatRoomCreateInput = {
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    user: UserCreateNestedOneWithoutChatRoomsInput
    agent?: UserCreateNestedOneWithoutAgentChatsInput
    messages?: ChatMessageCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: number
    userId: number
    agentId?: number | null
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    messages?: ChatMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUpdateInput = {
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutChatRoomsNestedInput
    agent?: UserUpdateOneWithoutAgentChatsNestedInput
    messages?: ChatMessageUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: ChatMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id?: number
    userId: number
    agentId?: number | null
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
  }

  export type ChatRoomUpdateManyMutationInput = {
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageCreateInput = {
    message: string
    type?: string
    isRead?: boolean
    readAt?: Date | string | null
    timestamp?: Date | string
    room: ChatRoomCreateNestedOneWithoutMessagesInput
    sender?: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: number
    roomId: number
    senderId?: number | null
    message: string
    type?: string
    isRead?: boolean
    readAt?: Date | string | null
    timestamp?: Date | string
  }

  export type ChatMessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: number
    roomId: number
    senderId?: number | null
    message: string
    type?: string
    isRead?: boolean
    readAt?: Date | string | null
    timestamp?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketTrendCreateInput = {
    industry: string
    metric: string
    value: number
    period: string
    date: Date | string
    source?: string | null
    createdAt?: Date | string
  }

  export type MarketTrendUncheckedCreateInput = {
    id?: number
    industry: string
    metric: string
    value: number
    period: string
    date: Date | string
    source?: string | null
    createdAt?: Date | string
  }

  export type MarketTrendUpdateInput = {
    industry?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketTrendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    industry?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketTrendCreateManyInput = {
    id?: number
    industry: string
    metric: string
    value: number
    period: string
    date: Date | string
    source?: string | null
    createdAt?: Date | string
  }

  export type MarketTrendUpdateManyMutationInput = {
    industry?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketTrendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    industry?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillDemandCreateInput = {
    skillName: string
    demandScore: number
    growth: number
    industry?: string | null
    region?: string | null
    period: Date | string
    createdAt?: Date | string
  }

  export type SkillDemandUncheckedCreateInput = {
    id?: number
    skillName: string
    demandScore: number
    growth: number
    industry?: string | null
    region?: string | null
    period: Date | string
    createdAt?: Date | string
  }

  export type SkillDemandUpdateInput = {
    skillName?: StringFieldUpdateOperationsInput | string
    demandScore?: FloatFieldUpdateOperationsInput | number
    growth?: FloatFieldUpdateOperationsInput | number
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    period?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillDemandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
    demandScore?: FloatFieldUpdateOperationsInput | number
    growth?: FloatFieldUpdateOperationsInput | number
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    period?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillDemandCreateManyInput = {
    id?: number
    skillName: string
    demandScore: number
    growth: number
    industry?: string | null
    region?: string | null
    period: Date | string
    createdAt?: Date | string
  }

  export type SkillDemandUpdateManyMutationInput = {
    skillName?: StringFieldUpdateOperationsInput | string
    demandScore?: FloatFieldUpdateOperationsInput | number
    growth?: FloatFieldUpdateOperationsInput | number
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    period?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillDemandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillName?: StringFieldUpdateOperationsInput | string
    demandScore?: FloatFieldUpdateOperationsInput | number
    growth?: FloatFieldUpdateOperationsInput | number
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    period?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
    employer?: EmployerCreateNestedOneWithoutUserInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    agentChats?: ChatRoomCreateNestedManyWithoutAgentInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput
    employer?: EmployerUncheckedCreateNestedOneWithoutUserInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    agentChats?: ChatRoomUncheckedCreateNestedManyWithoutAgentInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneWithoutUserNestedInput
    employer?: EmployerUpdateOneWithoutUserNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    agentChats?: ChatRoomUpdateManyWithoutAgentNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput
    employer?: EmployerUncheckedUpdateOneWithoutUserNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    agentChats?: ChatRoomUncheckedUpdateManyWithoutAgentNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ApplicantListRelationFilter = {
    every?: ApplicantWhereInput
    some?: ApplicantWhereInput
    none?: ApplicantWhereInput
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCategoryOrderByRelevanceInput = {
    fields: JobCategoryOrderByRelevanceFieldEnum | JobCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JobCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type JobCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JobCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type JobCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type JobCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type AcademicQualificationListRelationFilter = {
    every?: AcademicQualificationWhereInput
    some?: AcademicQualificationWhereInput
    none?: AcademicQualificationWhereInput
  }

  export type WorkExperienceListRelationFilter = {
    every?: WorkExperienceWhereInput
    some?: WorkExperienceWhereInput
    none?: WorkExperienceWhereInput
  }

  export type LanguageProficiencyListRelationFilter = {
    every?: LanguageProficiencyWhereInput
    some?: LanguageProficiencyWhereInput
    none?: LanguageProficiencyWhereInput
  }

  export type ComputerSkillListRelationFilter = {
    every?: ComputerSkillWhereInput
    some?: ComputerSkillWhereInput
    none?: ComputerSkillWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type JobCategoryListRelationFilter = {
    every?: JobCategoryWhereInput
    some?: JobCategoryWhereInput
    none?: JobCategoryWhereInput
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcademicQualificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageProficiencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComputerSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicantOrderByRelevanceInput = {
    fields: ApplicantOrderByRelevanceFieldEnum | ApplicantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApplicantCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    nida?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicantAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ApplicantMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    nida?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicantMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    nida?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicantSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmployerOrderByRelevanceInput = {
    fields: EmployerOrderByRelevanceFieldEnum | EmployerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployerCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployerAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmployerMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployerMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployerSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmployerScalarRelationFilter = {
    is?: EmployerWhereInput
    isNot?: EmployerWhereInput
  }

  export type JobOrderByRelevanceInput = {
    fields: JobOrderByRelevanceFieldEnum | JobOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    status?: SortOrder
    applicants?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
    applicants?: SortOrder
    employerId?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    status?: SortOrder
    applicants?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    status?: SortOrder
    applicants?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
    applicants?: SortOrder
    employerId?: SortOrder
  }

  export type JobScalarRelationFilter = {
    is?: JobWhereInput
    isNot?: JobWhereInput
  }

  export type ApplicantScalarRelationFilter = {
    is?: ApplicantWhereInput
    isNot?: ApplicantWhereInput
  }

  export type ApplicationOrderByRelevanceInput = {
    fields: ApplicationOrderByRelevanceFieldEnum | ApplicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ApplicantNullableScalarRelationFilter = {
    is?: ApplicantWhereInput | null
    isNot?: ApplicantWhereInput | null
  }

  export type EmployerNullableScalarRelationFilter = {
    is?: EmployerWhereInput | null
    isNot?: EmployerWhereInput | null
  }

  export type ApplicationNullableScalarRelationFilter = {
    is?: ApplicationWhereInput | null
    isNot?: ApplicationWhereInput | null
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
    expiresAt?: SortOrder
    applicantId?: SortOrder
    employerId?: SortOrder
    applicationId?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    employerId?: SortOrder
    applicationId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
    expiresAt?: SortOrder
    applicantId?: SortOrder
    employerId?: SortOrder
    applicationId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    readAt?: SortOrder
    expiresAt?: SortOrder
    applicantId?: SortOrder
    employerId?: SortOrder
    applicationId?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
    employerId?: SortOrder
    applicationId?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AcademicQualificationOrderByRelevanceInput = {
    fields: AcademicQualificationOrderByRelevanceFieldEnum | AcademicQualificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AcademicQualificationCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    country?: SortOrder
    institution?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    certificateUrl?: SortOrder
    applicantId?: SortOrder
  }

  export type AcademicQualificationAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type AcademicQualificationMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    country?: SortOrder
    institution?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    certificateUrl?: SortOrder
    applicantId?: SortOrder
  }

  export type AcademicQualificationMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    country?: SortOrder
    institution?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    certificateUrl?: SortOrder
    applicantId?: SortOrder
  }

  export type AcademicQualificationSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type WorkExperienceOrderByRelevanceInput = {
    fields: WorkExperienceOrderByRelevanceFieldEnum | WorkExperienceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    institutionAddress?: SortOrder
    jobTitle?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duties?: SortOrder
    supervisorName?: SortOrder
    supervisorTel?: SortOrder
    supervisorAddress?: SortOrder
    applicantId?: SortOrder
  }

  export type WorkExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type WorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    institutionAddress?: SortOrder
    jobTitle?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duties?: SortOrder
    supervisorName?: SortOrder
    supervisorTel?: SortOrder
    supervisorAddress?: SortOrder
    applicantId?: SortOrder
  }

  export type WorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    institutionAddress?: SortOrder
    jobTitle?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duties?: SortOrder
    supervisorName?: SortOrder
    supervisorTel?: SortOrder
    supervisorAddress?: SortOrder
    applicantId?: SortOrder
  }

  export type WorkExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type LanguageProficiencyOrderByRelevanceInput = {
    fields: LanguageProficiencyOrderByRelevanceFieldEnum | LanguageProficiencyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LanguageProficiencyCountOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    speak?: SortOrder
    read?: SortOrder
    write?: SortOrder
    applicantId?: SortOrder
  }

  export type LanguageProficiencyAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type LanguageProficiencyMaxOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    speak?: SortOrder
    read?: SortOrder
    write?: SortOrder
    applicantId?: SortOrder
  }

  export type LanguageProficiencyMinOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    speak?: SortOrder
    read?: SortOrder
    write?: SortOrder
    applicantId?: SortOrder
  }

  export type LanguageProficiencySumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type ComputerSkillOrderByRelevanceInput = {
    fields: ComputerSkillOrderByRelevanceFieldEnum | ComputerSkillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComputerSkillCountOrderByAggregateInput = {
    id?: SortOrder
    skill?: SortOrder
    proficiency?: SortOrder
    applicantId?: SortOrder
  }

  export type ComputerSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type ComputerSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    skill?: SortOrder
    proficiency?: SortOrder
    applicantId?: SortOrder
  }

  export type ComputerSkillMinOrderByAggregateInput = {
    id?: SortOrder
    skill?: SortOrder
    proficiency?: SortOrder
    applicantId?: SortOrder
  }

  export type ComputerSkillSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomOrderByRelevanceInput = {
    fields: ChatRoomOrderByRelevanceFieldEnum | ChatRoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
  }

  export type ChatRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
    topic?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
  }

  export type ChatRoomSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    agentId?: SortOrder
  }

  export type ChatRoomScalarRelationFilter = {
    is?: ChatRoomWhereInput
    isNot?: ChatRoomWhereInput
  }

  export type ChatMessageOrderByRelevanceInput = {
    fields: ChatMessageOrderByRelevanceFieldEnum | ChatMessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    timestamp?: SortOrder
  }

  export type ChatMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    timestamp?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
    timestamp?: SortOrder
  }

  export type ChatMessageSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MarketTrendOrderByRelevanceInput = {
    fields: MarketTrendOrderByRelevanceFieldEnum | MarketTrendOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MarketTrendCountOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    period?: SortOrder
    date?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketTrendAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type MarketTrendMaxOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    period?: SortOrder
    date?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketTrendMinOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    period?: SortOrder
    date?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketTrendSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SkillDemandOrderByRelevanceInput = {
    fields: SkillDemandOrderByRelevanceFieldEnum | SkillDemandOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SkillDemandCountOrderByAggregateInput = {
    id?: SortOrder
    skillName?: SortOrder
    demandScore?: SortOrder
    growth?: SortOrder
    industry?: SortOrder
    region?: SortOrder
    period?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillDemandAvgOrderByAggregateInput = {
    id?: SortOrder
    demandScore?: SortOrder
    growth?: SortOrder
  }

  export type SkillDemandMaxOrderByAggregateInput = {
    id?: SortOrder
    skillName?: SortOrder
    demandScore?: SortOrder
    growth?: SortOrder
    industry?: SortOrder
    region?: SortOrder
    period?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillDemandMinOrderByAggregateInput = {
    id?: SortOrder
    skillName?: SortOrder
    demandScore?: SortOrder
    growth?: SortOrder
    industry?: SortOrder
    region?: SortOrder
    period?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillDemandSumOrderByAggregateInput = {
    id?: SortOrder
    demandScore?: SortOrder
    growth?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ApplicantCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ApplicantCreateWithoutCategoriesInput, ApplicantUncheckedCreateWithoutCategoriesInput> | ApplicantCreateWithoutCategoriesInput[] | ApplicantUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ApplicantCreateOrConnectWithoutCategoriesInput | ApplicantCreateOrConnectWithoutCategoriesInput[]
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[]
  }

  export type JobCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<JobCreateWithoutCategoriesInput, JobUncheckedCreateWithoutCategoriesInput> | JobCreateWithoutCategoriesInput[] | JobUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCategoriesInput | JobCreateOrConnectWithoutCategoriesInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type ApplicantUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ApplicantCreateWithoutCategoriesInput, ApplicantUncheckedCreateWithoutCategoriesInput> | ApplicantCreateWithoutCategoriesInput[] | ApplicantUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ApplicantCreateOrConnectWithoutCategoriesInput | ApplicantCreateOrConnectWithoutCategoriesInput[]
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<JobCreateWithoutCategoriesInput, JobUncheckedCreateWithoutCategoriesInput> | JobCreateWithoutCategoriesInput[] | JobUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCategoriesInput | JobCreateOrConnectWithoutCategoriesInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ApplicantUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ApplicantCreateWithoutCategoriesInput, ApplicantUncheckedCreateWithoutCategoriesInput> | ApplicantCreateWithoutCategoriesInput[] | ApplicantUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ApplicantCreateOrConnectWithoutCategoriesInput | ApplicantCreateOrConnectWithoutCategoriesInput[]
    upsert?: ApplicantUpsertWithWhereUniqueWithoutCategoriesInput | ApplicantUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[]
    disconnect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[]
    delete?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[]
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[]
    update?: ApplicantUpdateWithWhereUniqueWithoutCategoriesInput | ApplicantUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ApplicantUpdateManyWithWhereWithoutCategoriesInput | ApplicantUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[]
  }

  export type JobUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<JobCreateWithoutCategoriesInput, JobUncheckedCreateWithoutCategoriesInput> | JobCreateWithoutCategoriesInput[] | JobUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCategoriesInput | JobCreateOrConnectWithoutCategoriesInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutCategoriesInput | JobUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutCategoriesInput | JobUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: JobUpdateManyWithWhereWithoutCategoriesInput | JobUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApplicantUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ApplicantCreateWithoutCategoriesInput, ApplicantUncheckedCreateWithoutCategoriesInput> | ApplicantCreateWithoutCategoriesInput[] | ApplicantUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ApplicantCreateOrConnectWithoutCategoriesInput | ApplicantCreateOrConnectWithoutCategoriesInput[]
    upsert?: ApplicantUpsertWithWhereUniqueWithoutCategoriesInput | ApplicantUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[]
    disconnect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[]
    delete?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[]
    connect?: ApplicantWhereUniqueInput | ApplicantWhereUniqueInput[]
    update?: ApplicantUpdateWithWhereUniqueWithoutCategoriesInput | ApplicantUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ApplicantUpdateManyWithWhereWithoutCategoriesInput | ApplicantUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<JobCreateWithoutCategoriesInput, JobUncheckedCreateWithoutCategoriesInput> | JobCreateWithoutCategoriesInput[] | JobUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: JobCreateOrConnectWithoutCategoriesInput | JobCreateOrConnectWithoutCategoriesInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutCategoriesInput | JobUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutCategoriesInput | JobUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: JobUpdateManyWithWhereWithoutCategoriesInput | JobUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApplicantInput = {
    create?: XOR<UserCreateWithoutApplicantInput, UserUncheckedCreateWithoutApplicantInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicantInput
    connect?: UserWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AcademicQualificationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<AcademicQualificationCreateWithoutApplicantInput, AcademicQualificationUncheckedCreateWithoutApplicantInput> | AcademicQualificationCreateWithoutApplicantInput[] | AcademicQualificationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: AcademicQualificationCreateOrConnectWithoutApplicantInput | AcademicQualificationCreateOrConnectWithoutApplicantInput[]
    createMany?: AcademicQualificationCreateManyApplicantInputEnvelope
    connect?: AcademicQualificationWhereUniqueInput | AcademicQualificationWhereUniqueInput[]
  }

  export type WorkExperienceCreateNestedManyWithoutApplicantInput = {
    create?: XOR<WorkExperienceCreateWithoutApplicantInput, WorkExperienceUncheckedCreateWithoutApplicantInput> | WorkExperienceCreateWithoutApplicantInput[] | WorkExperienceUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutApplicantInput | WorkExperienceCreateOrConnectWithoutApplicantInput[]
    createMany?: WorkExperienceCreateManyApplicantInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type LanguageProficiencyCreateNestedManyWithoutApplicantInput = {
    create?: XOR<LanguageProficiencyCreateWithoutApplicantInput, LanguageProficiencyUncheckedCreateWithoutApplicantInput> | LanguageProficiencyCreateWithoutApplicantInput[] | LanguageProficiencyUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: LanguageProficiencyCreateOrConnectWithoutApplicantInput | LanguageProficiencyCreateOrConnectWithoutApplicantInput[]
    createMany?: LanguageProficiencyCreateManyApplicantInputEnvelope
    connect?: LanguageProficiencyWhereUniqueInput | LanguageProficiencyWhereUniqueInput[]
  }

  export type ComputerSkillCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ComputerSkillCreateWithoutApplicantInput, ComputerSkillUncheckedCreateWithoutApplicantInput> | ComputerSkillCreateWithoutApplicantInput[] | ComputerSkillUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ComputerSkillCreateOrConnectWithoutApplicantInput | ComputerSkillCreateOrConnectWithoutApplicantInput[]
    createMany?: ComputerSkillCreateManyApplicantInputEnvelope
    connect?: ComputerSkillWhereUniqueInput | ComputerSkillWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<NotificationCreateWithoutApplicantInput, NotificationUncheckedCreateWithoutApplicantInput> | NotificationCreateWithoutApplicantInput[] | NotificationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutApplicantInput | NotificationCreateOrConnectWithoutApplicantInput[]
    createMany?: NotificationCreateManyApplicantInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type JobCategoryCreateNestedManyWithoutApplicantsInput = {
    create?: XOR<JobCategoryCreateWithoutApplicantsInput, JobCategoryUncheckedCreateWithoutApplicantsInput> | JobCategoryCreateWithoutApplicantsInput[] | JobCategoryUncheckedCreateWithoutApplicantsInput[]
    connectOrCreate?: JobCategoryCreateOrConnectWithoutApplicantsInput | JobCategoryCreateOrConnectWithoutApplicantsInput[]
    connect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AcademicQualificationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<AcademicQualificationCreateWithoutApplicantInput, AcademicQualificationUncheckedCreateWithoutApplicantInput> | AcademicQualificationCreateWithoutApplicantInput[] | AcademicQualificationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: AcademicQualificationCreateOrConnectWithoutApplicantInput | AcademicQualificationCreateOrConnectWithoutApplicantInput[]
    createMany?: AcademicQualificationCreateManyApplicantInputEnvelope
    connect?: AcademicQualificationWhereUniqueInput | AcademicQualificationWhereUniqueInput[]
  }

  export type WorkExperienceUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<WorkExperienceCreateWithoutApplicantInput, WorkExperienceUncheckedCreateWithoutApplicantInput> | WorkExperienceCreateWithoutApplicantInput[] | WorkExperienceUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutApplicantInput | WorkExperienceCreateOrConnectWithoutApplicantInput[]
    createMany?: WorkExperienceCreateManyApplicantInputEnvelope
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
  }

  export type LanguageProficiencyUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<LanguageProficiencyCreateWithoutApplicantInput, LanguageProficiencyUncheckedCreateWithoutApplicantInput> | LanguageProficiencyCreateWithoutApplicantInput[] | LanguageProficiencyUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: LanguageProficiencyCreateOrConnectWithoutApplicantInput | LanguageProficiencyCreateOrConnectWithoutApplicantInput[]
    createMany?: LanguageProficiencyCreateManyApplicantInputEnvelope
    connect?: LanguageProficiencyWhereUniqueInput | LanguageProficiencyWhereUniqueInput[]
  }

  export type ComputerSkillUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<ComputerSkillCreateWithoutApplicantInput, ComputerSkillUncheckedCreateWithoutApplicantInput> | ComputerSkillCreateWithoutApplicantInput[] | ComputerSkillUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ComputerSkillCreateOrConnectWithoutApplicantInput | ComputerSkillCreateOrConnectWithoutApplicantInput[]
    createMany?: ComputerSkillCreateManyApplicantInputEnvelope
    connect?: ComputerSkillWhereUniqueInput | ComputerSkillWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<NotificationCreateWithoutApplicantInput, NotificationUncheckedCreateWithoutApplicantInput> | NotificationCreateWithoutApplicantInput[] | NotificationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutApplicantInput | NotificationCreateOrConnectWithoutApplicantInput[]
    createMany?: NotificationCreateManyApplicantInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type JobCategoryUncheckedCreateNestedManyWithoutApplicantsInput = {
    create?: XOR<JobCategoryCreateWithoutApplicantsInput, JobCategoryUncheckedCreateWithoutApplicantsInput> | JobCategoryCreateWithoutApplicantsInput[] | JobCategoryUncheckedCreateWithoutApplicantsInput[]
    connectOrCreate?: JobCategoryCreateOrConnectWithoutApplicantsInput | JobCategoryCreateOrConnectWithoutApplicantsInput[]
    connect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutApplicantNestedInput = {
    create?: XOR<UserCreateWithoutApplicantInput, UserUncheckedCreateWithoutApplicantInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicantInput
    upsert?: UserUpsertWithoutApplicantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicantInput, UserUpdateWithoutApplicantInput>, UserUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AcademicQualificationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<AcademicQualificationCreateWithoutApplicantInput, AcademicQualificationUncheckedCreateWithoutApplicantInput> | AcademicQualificationCreateWithoutApplicantInput[] | AcademicQualificationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: AcademicQualificationCreateOrConnectWithoutApplicantInput | AcademicQualificationCreateOrConnectWithoutApplicantInput[]
    upsert?: AcademicQualificationUpsertWithWhereUniqueWithoutApplicantInput | AcademicQualificationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: AcademicQualificationCreateManyApplicantInputEnvelope
    set?: AcademicQualificationWhereUniqueInput | AcademicQualificationWhereUniqueInput[]
    disconnect?: AcademicQualificationWhereUniqueInput | AcademicQualificationWhereUniqueInput[]
    delete?: AcademicQualificationWhereUniqueInput | AcademicQualificationWhereUniqueInput[]
    connect?: AcademicQualificationWhereUniqueInput | AcademicQualificationWhereUniqueInput[]
    update?: AcademicQualificationUpdateWithWhereUniqueWithoutApplicantInput | AcademicQualificationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: AcademicQualificationUpdateManyWithWhereWithoutApplicantInput | AcademicQualificationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: AcademicQualificationScalarWhereInput | AcademicQualificationScalarWhereInput[]
  }

  export type WorkExperienceUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutApplicantInput, WorkExperienceUncheckedCreateWithoutApplicantInput> | WorkExperienceCreateWithoutApplicantInput[] | WorkExperienceUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutApplicantInput | WorkExperienceCreateOrConnectWithoutApplicantInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutApplicantInput | WorkExperienceUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: WorkExperienceCreateManyApplicantInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutApplicantInput | WorkExperienceUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutApplicantInput | WorkExperienceUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type LanguageProficiencyUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<LanguageProficiencyCreateWithoutApplicantInput, LanguageProficiencyUncheckedCreateWithoutApplicantInput> | LanguageProficiencyCreateWithoutApplicantInput[] | LanguageProficiencyUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: LanguageProficiencyCreateOrConnectWithoutApplicantInput | LanguageProficiencyCreateOrConnectWithoutApplicantInput[]
    upsert?: LanguageProficiencyUpsertWithWhereUniqueWithoutApplicantInput | LanguageProficiencyUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: LanguageProficiencyCreateManyApplicantInputEnvelope
    set?: LanguageProficiencyWhereUniqueInput | LanguageProficiencyWhereUniqueInput[]
    disconnect?: LanguageProficiencyWhereUniqueInput | LanguageProficiencyWhereUniqueInput[]
    delete?: LanguageProficiencyWhereUniqueInput | LanguageProficiencyWhereUniqueInput[]
    connect?: LanguageProficiencyWhereUniqueInput | LanguageProficiencyWhereUniqueInput[]
    update?: LanguageProficiencyUpdateWithWhereUniqueWithoutApplicantInput | LanguageProficiencyUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: LanguageProficiencyUpdateManyWithWhereWithoutApplicantInput | LanguageProficiencyUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: LanguageProficiencyScalarWhereInput | LanguageProficiencyScalarWhereInput[]
  }

  export type ComputerSkillUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ComputerSkillCreateWithoutApplicantInput, ComputerSkillUncheckedCreateWithoutApplicantInput> | ComputerSkillCreateWithoutApplicantInput[] | ComputerSkillUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ComputerSkillCreateOrConnectWithoutApplicantInput | ComputerSkillCreateOrConnectWithoutApplicantInput[]
    upsert?: ComputerSkillUpsertWithWhereUniqueWithoutApplicantInput | ComputerSkillUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ComputerSkillCreateManyApplicantInputEnvelope
    set?: ComputerSkillWhereUniqueInput | ComputerSkillWhereUniqueInput[]
    disconnect?: ComputerSkillWhereUniqueInput | ComputerSkillWhereUniqueInput[]
    delete?: ComputerSkillWhereUniqueInput | ComputerSkillWhereUniqueInput[]
    connect?: ComputerSkillWhereUniqueInput | ComputerSkillWhereUniqueInput[]
    update?: ComputerSkillUpdateWithWhereUniqueWithoutApplicantInput | ComputerSkillUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ComputerSkillUpdateManyWithWhereWithoutApplicantInput | ComputerSkillUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ComputerSkillScalarWhereInput | ComputerSkillScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<NotificationCreateWithoutApplicantInput, NotificationUncheckedCreateWithoutApplicantInput> | NotificationCreateWithoutApplicantInput[] | NotificationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutApplicantInput | NotificationCreateOrConnectWithoutApplicantInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutApplicantInput | NotificationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: NotificationCreateManyApplicantInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutApplicantInput | NotificationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutApplicantInput | NotificationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type JobCategoryUpdateManyWithoutApplicantsNestedInput = {
    create?: XOR<JobCategoryCreateWithoutApplicantsInput, JobCategoryUncheckedCreateWithoutApplicantsInput> | JobCategoryCreateWithoutApplicantsInput[] | JobCategoryUncheckedCreateWithoutApplicantsInput[]
    connectOrCreate?: JobCategoryCreateOrConnectWithoutApplicantsInput | JobCategoryCreateOrConnectWithoutApplicantsInput[]
    upsert?: JobCategoryUpsertWithWhereUniqueWithoutApplicantsInput | JobCategoryUpsertWithWhereUniqueWithoutApplicantsInput[]
    set?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    disconnect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    delete?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    connect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    update?: JobCategoryUpdateWithWhereUniqueWithoutApplicantsInput | JobCategoryUpdateWithWhereUniqueWithoutApplicantsInput[]
    updateMany?: JobCategoryUpdateManyWithWhereWithoutApplicantsInput | JobCategoryUpdateManyWithWhereWithoutApplicantsInput[]
    deleteMany?: JobCategoryScalarWhereInput | JobCategoryScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput> | ApplicationCreateWithoutApplicantInput[] | ApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutApplicantInput | ApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutApplicantInput | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ApplicationCreateManyApplicantInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutApplicantInput | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutApplicantInput | ApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AcademicQualificationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<AcademicQualificationCreateWithoutApplicantInput, AcademicQualificationUncheckedCreateWithoutApplicantInput> | AcademicQualificationCreateWithoutApplicantInput[] | AcademicQualificationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: AcademicQualificationCreateOrConnectWithoutApplicantInput | AcademicQualificationCreateOrConnectWithoutApplicantInput[]
    upsert?: AcademicQualificationUpsertWithWhereUniqueWithoutApplicantInput | AcademicQualificationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: AcademicQualificationCreateManyApplicantInputEnvelope
    set?: AcademicQualificationWhereUniqueInput | AcademicQualificationWhereUniqueInput[]
    disconnect?: AcademicQualificationWhereUniqueInput | AcademicQualificationWhereUniqueInput[]
    delete?: AcademicQualificationWhereUniqueInput | AcademicQualificationWhereUniqueInput[]
    connect?: AcademicQualificationWhereUniqueInput | AcademicQualificationWhereUniqueInput[]
    update?: AcademicQualificationUpdateWithWhereUniqueWithoutApplicantInput | AcademicQualificationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: AcademicQualificationUpdateManyWithWhereWithoutApplicantInput | AcademicQualificationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: AcademicQualificationScalarWhereInput | AcademicQualificationScalarWhereInput[]
  }

  export type WorkExperienceUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<WorkExperienceCreateWithoutApplicantInput, WorkExperienceUncheckedCreateWithoutApplicantInput> | WorkExperienceCreateWithoutApplicantInput[] | WorkExperienceUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: WorkExperienceCreateOrConnectWithoutApplicantInput | WorkExperienceCreateOrConnectWithoutApplicantInput[]
    upsert?: WorkExperienceUpsertWithWhereUniqueWithoutApplicantInput | WorkExperienceUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: WorkExperienceCreateManyApplicantInputEnvelope
    set?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    disconnect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    delete?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    connect?: WorkExperienceWhereUniqueInput | WorkExperienceWhereUniqueInput[]
    update?: WorkExperienceUpdateWithWhereUniqueWithoutApplicantInput | WorkExperienceUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: WorkExperienceUpdateManyWithWhereWithoutApplicantInput | WorkExperienceUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
  }

  export type LanguageProficiencyUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<LanguageProficiencyCreateWithoutApplicantInput, LanguageProficiencyUncheckedCreateWithoutApplicantInput> | LanguageProficiencyCreateWithoutApplicantInput[] | LanguageProficiencyUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: LanguageProficiencyCreateOrConnectWithoutApplicantInput | LanguageProficiencyCreateOrConnectWithoutApplicantInput[]
    upsert?: LanguageProficiencyUpsertWithWhereUniqueWithoutApplicantInput | LanguageProficiencyUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: LanguageProficiencyCreateManyApplicantInputEnvelope
    set?: LanguageProficiencyWhereUniqueInput | LanguageProficiencyWhereUniqueInput[]
    disconnect?: LanguageProficiencyWhereUniqueInput | LanguageProficiencyWhereUniqueInput[]
    delete?: LanguageProficiencyWhereUniqueInput | LanguageProficiencyWhereUniqueInput[]
    connect?: LanguageProficiencyWhereUniqueInput | LanguageProficiencyWhereUniqueInput[]
    update?: LanguageProficiencyUpdateWithWhereUniqueWithoutApplicantInput | LanguageProficiencyUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: LanguageProficiencyUpdateManyWithWhereWithoutApplicantInput | LanguageProficiencyUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: LanguageProficiencyScalarWhereInput | LanguageProficiencyScalarWhereInput[]
  }

  export type ComputerSkillUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<ComputerSkillCreateWithoutApplicantInput, ComputerSkillUncheckedCreateWithoutApplicantInput> | ComputerSkillCreateWithoutApplicantInput[] | ComputerSkillUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: ComputerSkillCreateOrConnectWithoutApplicantInput | ComputerSkillCreateOrConnectWithoutApplicantInput[]
    upsert?: ComputerSkillUpsertWithWhereUniqueWithoutApplicantInput | ComputerSkillUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: ComputerSkillCreateManyApplicantInputEnvelope
    set?: ComputerSkillWhereUniqueInput | ComputerSkillWhereUniqueInput[]
    disconnect?: ComputerSkillWhereUniqueInput | ComputerSkillWhereUniqueInput[]
    delete?: ComputerSkillWhereUniqueInput | ComputerSkillWhereUniqueInput[]
    connect?: ComputerSkillWhereUniqueInput | ComputerSkillWhereUniqueInput[]
    update?: ComputerSkillUpdateWithWhereUniqueWithoutApplicantInput | ComputerSkillUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: ComputerSkillUpdateManyWithWhereWithoutApplicantInput | ComputerSkillUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: ComputerSkillScalarWhereInput | ComputerSkillScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<NotificationCreateWithoutApplicantInput, NotificationUncheckedCreateWithoutApplicantInput> | NotificationCreateWithoutApplicantInput[] | NotificationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutApplicantInput | NotificationCreateOrConnectWithoutApplicantInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutApplicantInput | NotificationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: NotificationCreateManyApplicantInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutApplicantInput | NotificationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutApplicantInput | NotificationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type JobCategoryUncheckedUpdateManyWithoutApplicantsNestedInput = {
    create?: XOR<JobCategoryCreateWithoutApplicantsInput, JobCategoryUncheckedCreateWithoutApplicantsInput> | JobCategoryCreateWithoutApplicantsInput[] | JobCategoryUncheckedCreateWithoutApplicantsInput[]
    connectOrCreate?: JobCategoryCreateOrConnectWithoutApplicantsInput | JobCategoryCreateOrConnectWithoutApplicantsInput[]
    upsert?: JobCategoryUpsertWithWhereUniqueWithoutApplicantsInput | JobCategoryUpsertWithWhereUniqueWithoutApplicantsInput[]
    set?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    disconnect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    delete?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    connect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    update?: JobCategoryUpdateWithWhereUniqueWithoutApplicantsInput | JobCategoryUpdateWithWhereUniqueWithoutApplicantsInput[]
    updateMany?: JobCategoryUpdateManyWithWhereWithoutApplicantsInput | JobCategoryUpdateManyWithWhereWithoutApplicantsInput[]
    deleteMany?: JobCategoryScalarWhereInput | JobCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmployerInput = {
    create?: XOR<UserCreateWithoutEmployerInput, UserUncheckedCreateWithoutEmployerInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployerInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedManyWithoutEmployerInput = {
    create?: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput> | JobCreateWithoutEmployerInput[] | JobUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutEmployerInput | JobCreateOrConnectWithoutEmployerInput[]
    createMany?: JobCreateManyEmployerInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutEmployerInput = {
    create?: XOR<NotificationCreateWithoutEmployerInput, NotificationUncheckedCreateWithoutEmployerInput> | NotificationCreateWithoutEmployerInput[] | NotificationUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmployerInput | NotificationCreateOrConnectWithoutEmployerInput[]
    createMany?: NotificationCreateManyEmployerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutEmployerInput = {
    create?: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput> | JobCreateWithoutEmployerInput[] | JobUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutEmployerInput | JobCreateOrConnectWithoutEmployerInput[]
    createMany?: JobCreateManyEmployerInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutEmployerInput = {
    create?: XOR<NotificationCreateWithoutEmployerInput, NotificationUncheckedCreateWithoutEmployerInput> | NotificationCreateWithoutEmployerInput[] | NotificationUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmployerInput | NotificationCreateOrConnectWithoutEmployerInput[]
    createMany?: NotificationCreateManyEmployerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEmployerNestedInput = {
    create?: XOR<UserCreateWithoutEmployerInput, UserUncheckedCreateWithoutEmployerInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployerInput
    upsert?: UserUpsertWithoutEmployerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployerInput, UserUpdateWithoutEmployerInput>, UserUncheckedUpdateWithoutEmployerInput>
  }

  export type JobUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput> | JobCreateWithoutEmployerInput[] | JobUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutEmployerInput | JobCreateOrConnectWithoutEmployerInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutEmployerInput | JobUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: JobCreateManyEmployerInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutEmployerInput | JobUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: JobUpdateManyWithWhereWithoutEmployerInput | JobUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<NotificationCreateWithoutEmployerInput, NotificationUncheckedCreateWithoutEmployerInput> | NotificationCreateWithoutEmployerInput[] | NotificationUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmployerInput | NotificationCreateOrConnectWithoutEmployerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutEmployerInput | NotificationUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: NotificationCreateManyEmployerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutEmployerInput | NotificationUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutEmployerInput | NotificationUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput> | JobCreateWithoutEmployerInput[] | JobUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutEmployerInput | JobCreateOrConnectWithoutEmployerInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutEmployerInput | JobUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: JobCreateManyEmployerInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutEmployerInput | JobUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: JobUpdateManyWithWhereWithoutEmployerInput | JobUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<NotificationCreateWithoutEmployerInput, NotificationUncheckedCreateWithoutEmployerInput> | NotificationCreateWithoutEmployerInput[] | NotificationUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutEmployerInput | NotificationCreateOrConnectWithoutEmployerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutEmployerInput | NotificationUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: NotificationCreateManyEmployerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutEmployerInput | NotificationUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutEmployerInput | NotificationUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type EmployerCreateNestedOneWithoutJobsInput = {
    create?: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutJobsInput
    connect?: EmployerWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type JobCategoryCreateNestedManyWithoutJobsInput = {
    create?: XOR<JobCategoryCreateWithoutJobsInput, JobCategoryUncheckedCreateWithoutJobsInput> | JobCategoryCreateWithoutJobsInput[] | JobCategoryUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: JobCategoryCreateOrConnectWithoutJobsInput | JobCategoryCreateOrConnectWithoutJobsInput[]
    connect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type JobCategoryUncheckedCreateNestedManyWithoutJobsInput = {
    create?: XOR<JobCategoryCreateWithoutJobsInput, JobCategoryUncheckedCreateWithoutJobsInput> | JobCategoryCreateWithoutJobsInput[] | JobCategoryUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: JobCategoryCreateOrConnectWithoutJobsInput | JobCategoryCreateOrConnectWithoutJobsInput[]
    connect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
  }

  export type EmployerUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutJobsInput
    upsert?: EmployerUpsertWithoutJobsInput
    connect?: EmployerWhereUniqueInput
    update?: XOR<XOR<EmployerUpdateToOneWithWhereWithoutJobsInput, EmployerUpdateWithoutJobsInput>, EmployerUncheckedUpdateWithoutJobsInput>
  }

  export type ApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput | ApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobInput | ApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobInput | ApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type JobCategoryUpdateManyWithoutJobsNestedInput = {
    create?: XOR<JobCategoryCreateWithoutJobsInput, JobCategoryUncheckedCreateWithoutJobsInput> | JobCategoryCreateWithoutJobsInput[] | JobCategoryUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: JobCategoryCreateOrConnectWithoutJobsInput | JobCategoryCreateOrConnectWithoutJobsInput[]
    upsert?: JobCategoryUpsertWithWhereUniqueWithoutJobsInput | JobCategoryUpsertWithWhereUniqueWithoutJobsInput[]
    set?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    disconnect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    delete?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    connect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    update?: JobCategoryUpdateWithWhereUniqueWithoutJobsInput | JobCategoryUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: JobCategoryUpdateManyWithWhereWithoutJobsInput | JobCategoryUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: JobCategoryScalarWhereInput | JobCategoryScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput | ApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobInput | ApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobInput | ApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type JobCategoryUncheckedUpdateManyWithoutJobsNestedInput = {
    create?: XOR<JobCategoryCreateWithoutJobsInput, JobCategoryUncheckedCreateWithoutJobsInput> | JobCategoryCreateWithoutJobsInput[] | JobCategoryUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: JobCategoryCreateOrConnectWithoutJobsInput | JobCategoryCreateOrConnectWithoutJobsInput[]
    upsert?: JobCategoryUpsertWithWhereUniqueWithoutJobsInput | JobCategoryUpsertWithWhereUniqueWithoutJobsInput[]
    set?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    disconnect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    delete?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    connect?: JobCategoryWhereUniqueInput | JobCategoryWhereUniqueInput[]
    update?: JobCategoryUpdateWithWhereUniqueWithoutJobsInput | JobCategoryUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: JobCategoryUpdateManyWithWhereWithoutJobsInput | JobCategoryUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: JobCategoryScalarWhereInput | JobCategoryScalarWhereInput[]
  }

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    connect?: JobWhereUniqueInput
  }

  export type ApplicantCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutApplicationsInput
    connect?: ApplicantWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutApplicationInput = {
    create?: XOR<NotificationCreateWithoutApplicationInput, NotificationUncheckedCreateWithoutApplicationInput> | NotificationCreateWithoutApplicationInput[] | NotificationUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutApplicationInput | NotificationCreateOrConnectWithoutApplicationInput[]
    createMany?: NotificationCreateManyApplicationInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<NotificationCreateWithoutApplicationInput, NotificationUncheckedCreateWithoutApplicationInput> | NotificationCreateWithoutApplicationInput[] | NotificationUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutApplicationInput | NotificationCreateOrConnectWithoutApplicationInput[]
    createMany?: NotificationCreateManyApplicationInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput
    upsert?: JobUpsertWithoutApplicationsInput
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutApplicationsInput, JobUpdateWithoutApplicationsInput>, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type ApplicantUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutApplicationsInput
    upsert?: ApplicantUpsertWithoutApplicationsInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutApplicationsInput, ApplicantUpdateWithoutApplicationsInput>, ApplicantUncheckedUpdateWithoutApplicationsInput>
  }

  export type NotificationUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<NotificationCreateWithoutApplicationInput, NotificationUncheckedCreateWithoutApplicationInput> | NotificationCreateWithoutApplicationInput[] | NotificationUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutApplicationInput | NotificationCreateOrConnectWithoutApplicationInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutApplicationInput | NotificationUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: NotificationCreateManyApplicationInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutApplicationInput | NotificationUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutApplicationInput | NotificationUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<NotificationCreateWithoutApplicationInput, NotificationUncheckedCreateWithoutApplicationInput> | NotificationCreateWithoutApplicationInput[] | NotificationUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutApplicationInput | NotificationCreateOrConnectWithoutApplicationInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutApplicationInput | NotificationUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: NotificationCreateManyApplicationInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutApplicationInput | NotificationUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutApplicationInput | NotificationUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ApplicantCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ApplicantCreateWithoutNotificationsInput, ApplicantUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutNotificationsInput
    connect?: ApplicantWhereUniqueInput
  }

  export type EmployerCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<EmployerCreateWithoutNotificationsInput, EmployerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutNotificationsInput
    connect?: EmployerWhereUniqueInput
  }

  export type ApplicationCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ApplicationCreateWithoutNotificationsInput, ApplicationUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutNotificationsInput
    connect?: ApplicationWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ApplicantUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ApplicantCreateWithoutNotificationsInput, ApplicantUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutNotificationsInput
    upsert?: ApplicantUpsertWithoutNotificationsInput
    disconnect?: ApplicantWhereInput | boolean
    delete?: ApplicantWhereInput | boolean
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutNotificationsInput, ApplicantUpdateWithoutNotificationsInput>, ApplicantUncheckedUpdateWithoutNotificationsInput>
  }

  export type EmployerUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<EmployerCreateWithoutNotificationsInput, EmployerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutNotificationsInput
    upsert?: EmployerUpsertWithoutNotificationsInput
    disconnect?: EmployerWhereInput | boolean
    delete?: EmployerWhereInput | boolean
    connect?: EmployerWhereUniqueInput
    update?: XOR<XOR<EmployerUpdateToOneWithWhereWithoutNotificationsInput, EmployerUpdateWithoutNotificationsInput>, EmployerUncheckedUpdateWithoutNotificationsInput>
  }

  export type ApplicationUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ApplicationCreateWithoutNotificationsInput, ApplicationUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutNotificationsInput
    upsert?: ApplicationUpsertWithoutNotificationsInput
    disconnect?: ApplicationWhereInput | boolean
    delete?: ApplicationWhereInput | boolean
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutNotificationsInput, ApplicationUpdateWithoutNotificationsInput>, ApplicationUncheckedUpdateWithoutNotificationsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApplicantCreateNestedOneWithoutQualificationsInput = {
    create?: XOR<ApplicantCreateWithoutQualificationsInput, ApplicantUncheckedCreateWithoutQualificationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutQualificationsInput
    connect?: ApplicantWhereUniqueInput
  }

  export type ApplicantUpdateOneRequiredWithoutQualificationsNestedInput = {
    create?: XOR<ApplicantCreateWithoutQualificationsInput, ApplicantUncheckedCreateWithoutQualificationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutQualificationsInput
    upsert?: ApplicantUpsertWithoutQualificationsInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutQualificationsInput, ApplicantUpdateWithoutQualificationsInput>, ApplicantUncheckedUpdateWithoutQualificationsInput>
  }

  export type ApplicantCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<ApplicantCreateWithoutExperiencesInput, ApplicantUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutExperiencesInput
    connect?: ApplicantWhereUniqueInput
  }

  export type ApplicantUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<ApplicantCreateWithoutExperiencesInput, ApplicantUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutExperiencesInput
    upsert?: ApplicantUpsertWithoutExperiencesInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutExperiencesInput, ApplicantUpdateWithoutExperiencesInput>, ApplicantUncheckedUpdateWithoutExperiencesInput>
  }

  export type ApplicantCreateNestedOneWithoutLanguagesInput = {
    create?: XOR<ApplicantCreateWithoutLanguagesInput, ApplicantUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutLanguagesInput
    connect?: ApplicantWhereUniqueInput
  }

  export type ApplicantUpdateOneRequiredWithoutLanguagesNestedInput = {
    create?: XOR<ApplicantCreateWithoutLanguagesInput, ApplicantUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutLanguagesInput
    upsert?: ApplicantUpsertWithoutLanguagesInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutLanguagesInput, ApplicantUpdateWithoutLanguagesInput>, ApplicantUncheckedUpdateWithoutLanguagesInput>
  }

  export type ApplicantCreateNestedOneWithoutSkillsInput = {
    create?: XOR<ApplicantCreateWithoutSkillsInput, ApplicantUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutSkillsInput
    connect?: ApplicantWhereUniqueInput
  }

  export type ApplicantUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<ApplicantCreateWithoutSkillsInput, ApplicantUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutSkillsInput
    upsert?: ApplicantUpsertWithoutSkillsInput
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutSkillsInput, ApplicantUpdateWithoutSkillsInput>, ApplicantUncheckedUpdateWithoutSkillsInput>
  }

  export type UserCreateNestedOneWithoutChatRoomsInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAgentChatsInput = {
    create?: XOR<UserCreateWithoutAgentChatsInput, UserUncheckedCreateWithoutAgentChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentChatsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput> | ChatMessageCreateWithoutRoomInput[] | ChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRoomInput | ChatMessageCreateOrConnectWithoutRoomInput[]
    createMany?: ChatMessageCreateManyRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput> | ChatMessageCreateWithoutRoomInput[] | ChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRoomInput | ChatMessageCreateOrConnectWithoutRoomInput[]
    createMany?: ChatMessageCreateManyRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChatRoomsNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput
    upsert?: UserUpsertWithoutChatRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatRoomsInput, UserUpdateWithoutChatRoomsInput>, UserUncheckedUpdateWithoutChatRoomsInput>
  }

  export type UserUpdateOneWithoutAgentChatsNestedInput = {
    create?: XOR<UserCreateWithoutAgentChatsInput, UserUncheckedCreateWithoutAgentChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentChatsInput
    upsert?: UserUpsertWithoutAgentChatsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgentChatsInput, UserUpdateWithoutAgentChatsInput>, UserUncheckedUpdateWithoutAgentChatsInput>
  }

  export type ChatMessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput> | ChatMessageCreateWithoutRoomInput[] | ChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRoomInput | ChatMessageCreateOrConnectWithoutRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutRoomInput | ChatMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatMessageCreateManyRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutRoomInput | ChatMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutRoomInput | ChatMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput> | ChatMessageCreateWithoutRoomInput[] | ChatMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRoomInput | ChatMessageCreateOrConnectWithoutRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutRoomInput | ChatMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatMessageCreateManyRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutRoomInput | ChatMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutRoomInput | ChatMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatRoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    upsert?: ChatRoomUpsertWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutMessagesInput, ChatRoomUpdateWithoutMessagesInput>, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApplicantCreateNestedOneWithoutUserInput = {
    create?: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput
    connect?: ApplicantWhereUniqueInput
  }

  export type EmployerCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutUserInput
    connect?: EmployerWhereUniqueInput
  }

  export type ChatRoomCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutAgentInput = {
    create?: XOR<ChatRoomCreateWithoutAgentInput, ChatRoomUncheckedCreateWithoutAgentInput> | ChatRoomCreateWithoutAgentInput[] | ChatRoomUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutAgentInput | ChatRoomCreateOrConnectWithoutAgentInput[]
    createMany?: ChatRoomCreateManyAgentInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ApplicantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput
    connect?: ApplicantWhereUniqueInput
  }

  export type EmployerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutUserInput
    connect?: EmployerWhereUniqueInput
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<ChatRoomCreateWithoutAgentInput, ChatRoomUncheckedCreateWithoutAgentInput> | ChatRoomCreateWithoutAgentInput[] | ChatRoomUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutAgentInput | ChatRoomCreateOrConnectWithoutAgentInput[]
    createMany?: ChatRoomCreateManyAgentInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ApplicantUpdateOneWithoutUserNestedInput = {
    create?: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput
    upsert?: ApplicantUpsertWithoutUserInput
    disconnect?: ApplicantWhereInput | boolean
    delete?: ApplicantWhereInput | boolean
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutUserInput, ApplicantUpdateWithoutUserInput>, ApplicantUncheckedUpdateWithoutUserInput>
  }

  export type EmployerUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutUserInput
    upsert?: EmployerUpsertWithoutUserInput
    disconnect?: EmployerWhereInput | boolean
    delete?: EmployerWhereInput | boolean
    connect?: EmployerWhereUniqueInput
    update?: XOR<XOR<EmployerUpdateToOneWithWhereWithoutUserInput, EmployerUpdateWithoutUserInput>, EmployerUncheckedUpdateWithoutUserInput>
  }

  export type ChatRoomUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserInput | ChatRoomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserInput | ChatRoomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserInput | ChatRoomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ChatRoomCreateWithoutAgentInput, ChatRoomUncheckedCreateWithoutAgentInput> | ChatRoomCreateWithoutAgentInput[] | ChatRoomUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutAgentInput | ChatRoomCreateOrConnectWithoutAgentInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutAgentInput | ChatRoomUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ChatRoomCreateManyAgentInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutAgentInput | ChatRoomUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutAgentInput | ChatRoomUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ApplicantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutUserInput
    upsert?: ApplicantUpsertWithoutUserInput
    disconnect?: ApplicantWhereInput | boolean
    delete?: ApplicantWhereInput | boolean
    connect?: ApplicantWhereUniqueInput
    update?: XOR<XOR<ApplicantUpdateToOneWithWhereWithoutUserInput, ApplicantUpdateWithoutUserInput>, ApplicantUncheckedUpdateWithoutUserInput>
  }

  export type EmployerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutUserInput
    upsert?: EmployerUpsertWithoutUserInput
    disconnect?: EmployerWhereInput | boolean
    delete?: EmployerWhereInput | boolean
    connect?: EmployerWhereUniqueInput
    update?: XOR<XOR<EmployerUpdateToOneWithWhereWithoutUserInput, EmployerUpdateWithoutUserInput>, EmployerUncheckedUpdateWithoutUserInput>
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput> | ChatRoomCreateWithoutUserInput[] | ChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUserInput | ChatRoomCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutUserInput | ChatRoomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomCreateManyUserInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutUserInput | ChatRoomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutUserInput | ChatRoomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<ChatRoomCreateWithoutAgentInput, ChatRoomUncheckedCreateWithoutAgentInput> | ChatRoomCreateWithoutAgentInput[] | ChatRoomUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutAgentInput | ChatRoomCreateOrConnectWithoutAgentInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutAgentInput | ChatRoomUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: ChatRoomCreateManyAgentInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutAgentInput | ChatRoomUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutAgentInput | ChatRoomUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ApplicantCreateWithoutCategoriesInput = {
    fullName: string
    nida: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillCreateNestedManyWithoutApplicantInput
    notifications?: NotificationCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantUncheckedCreateWithoutCategoriesInput = {
    id?: number
    fullName: string
    nida: string
    userId: number
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationUncheckedCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyUncheckedCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicantInput
  }

  export type ApplicantCreateOrConnectWithoutCategoriesInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutCategoriesInput, ApplicantUncheckedCreateWithoutCategoriesInput>
  }

  export type JobCreateWithoutCategoriesInput = {
    title: string
    description: string
    location?: string | null
    status?: string
    applicants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: EmployerCreateNestedOneWithoutJobsInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    applicants?: number
    employerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutCategoriesInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutCategoriesInput, JobUncheckedCreateWithoutCategoriesInput>
  }

  export type ApplicantUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ApplicantWhereUniqueInput
    update: XOR<ApplicantUpdateWithoutCategoriesInput, ApplicantUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ApplicantCreateWithoutCategoriesInput, ApplicantUncheckedCreateWithoutCategoriesInput>
  }

  export type ApplicantUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ApplicantWhereUniqueInput
    data: XOR<ApplicantUpdateWithoutCategoriesInput, ApplicantUncheckedUpdateWithoutCategoriesInput>
  }

  export type ApplicantUpdateManyWithWhereWithoutCategoriesInput = {
    where: ApplicantScalarWhereInput
    data: XOR<ApplicantUpdateManyMutationInput, ApplicantUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ApplicantScalarWhereInput = {
    AND?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[]
    OR?: ApplicantScalarWhereInput[]
    NOT?: ApplicantScalarWhereInput | ApplicantScalarWhereInput[]
    id?: IntFilter<"Applicant"> | number
    fullName?: StringFilter<"Applicant"> | string
    nida?: StringFilter<"Applicant"> | string
    userId?: IntFilter<"Applicant"> | number
    createdAt?: DateTimeFilter<"Applicant"> | Date | string
  }

  export type JobUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutCategoriesInput, JobUncheckedUpdateWithoutCategoriesInput>
    create: XOR<JobCreateWithoutCategoriesInput, JobUncheckedCreateWithoutCategoriesInput>
  }

  export type JobUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutCategoriesInput, JobUncheckedUpdateWithoutCategoriesInput>
  }

  export type JobUpdateManyWithWhereWithoutCategoriesInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    location?: StringNullableFilter<"Job"> | string | null
    status?: StringFilter<"Job"> | string
    applicants?: IntFilter<"Job"> | number
    employerId?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type UserCreateWithoutApplicantInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    employer?: EmployerCreateNestedOneWithoutUserInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    agentChats?: ChatRoomCreateNestedManyWithoutAgentInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutApplicantInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    employer?: EmployerUncheckedCreateNestedOneWithoutUserInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    agentChats?: ChatRoomUncheckedCreateNestedManyWithoutAgentInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutApplicantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicantInput, UserUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateWithoutApplicantInput = {
    status?: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
    notifications?: NotificationCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: number
    status?: string
    jobId: number
    createdAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data: ApplicationCreateManyApplicantInput | ApplicationCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type AcademicQualificationCreateWithoutApplicantInput = {
    level: string
    country: string
    institution: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    certificateUrl?: string | null
  }

  export type AcademicQualificationUncheckedCreateWithoutApplicantInput = {
    id?: number
    level: string
    country: string
    institution: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    certificateUrl?: string | null
  }

  export type AcademicQualificationCreateOrConnectWithoutApplicantInput = {
    where: AcademicQualificationWhereUniqueInput
    create: XOR<AcademicQualificationCreateWithoutApplicantInput, AcademicQualificationUncheckedCreateWithoutApplicantInput>
  }

  export type AcademicQualificationCreateManyApplicantInputEnvelope = {
    data: AcademicQualificationCreateManyApplicantInput | AcademicQualificationCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type WorkExperienceCreateWithoutApplicantInput = {
    institution: string
    institutionAddress?: string | null
    jobTitle: string
    startDate: Date | string
    endDate?: Date | string | null
    duties?: string | null
    supervisorName?: string | null
    supervisorTel?: string | null
    supervisorAddress?: string | null
  }

  export type WorkExperienceUncheckedCreateWithoutApplicantInput = {
    id?: number
    institution: string
    institutionAddress?: string | null
    jobTitle: string
    startDate: Date | string
    endDate?: Date | string | null
    duties?: string | null
    supervisorName?: string | null
    supervisorTel?: string | null
    supervisorAddress?: string | null
  }

  export type WorkExperienceCreateOrConnectWithoutApplicantInput = {
    where: WorkExperienceWhereUniqueInput
    create: XOR<WorkExperienceCreateWithoutApplicantInput, WorkExperienceUncheckedCreateWithoutApplicantInput>
  }

  export type WorkExperienceCreateManyApplicantInputEnvelope = {
    data: WorkExperienceCreateManyApplicantInput | WorkExperienceCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type LanguageProficiencyCreateWithoutApplicantInput = {
    language: string
    speak: string
    read: string
    write: string
  }

  export type LanguageProficiencyUncheckedCreateWithoutApplicantInput = {
    id?: number
    language: string
    speak: string
    read: string
    write: string
  }

  export type LanguageProficiencyCreateOrConnectWithoutApplicantInput = {
    where: LanguageProficiencyWhereUniqueInput
    create: XOR<LanguageProficiencyCreateWithoutApplicantInput, LanguageProficiencyUncheckedCreateWithoutApplicantInput>
  }

  export type LanguageProficiencyCreateManyApplicantInputEnvelope = {
    data: LanguageProficiencyCreateManyApplicantInput | LanguageProficiencyCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type ComputerSkillCreateWithoutApplicantInput = {
    skill: string
    proficiency: string
  }

  export type ComputerSkillUncheckedCreateWithoutApplicantInput = {
    id?: number
    skill: string
    proficiency: string
  }

  export type ComputerSkillCreateOrConnectWithoutApplicantInput = {
    where: ComputerSkillWhereUniqueInput
    create: XOR<ComputerSkillCreateWithoutApplicantInput, ComputerSkillUncheckedCreateWithoutApplicantInput>
  }

  export type ComputerSkillCreateManyApplicantInputEnvelope = {
    data: ComputerSkillCreateManyApplicantInput | ComputerSkillCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutApplicantInput = {
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    employer?: EmployerCreateNestedOneWithoutNotificationsInput
    application?: ApplicationCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutApplicantInput = {
    id?: number
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    employerId?: number | null
    applicationId?: number | null
  }

  export type NotificationCreateOrConnectWithoutApplicantInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutApplicantInput, NotificationUncheckedCreateWithoutApplicantInput>
  }

  export type NotificationCreateManyApplicantInputEnvelope = {
    data: NotificationCreateManyApplicantInput | NotificationCreateManyApplicantInput[]
    skipDuplicates?: boolean
  }

  export type JobCategoryCreateWithoutApplicantsInput = {
    name: string
    description?: string | null
    jobs?: JobCreateNestedManyWithoutCategoriesInput
  }

  export type JobCategoryUncheckedCreateWithoutApplicantsInput = {
    id?: number
    name: string
    description?: string | null
    jobs?: JobUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type JobCategoryCreateOrConnectWithoutApplicantsInput = {
    where: JobCategoryWhereUniqueInput
    create: XOR<JobCategoryCreateWithoutApplicantsInput, JobCategoryUncheckedCreateWithoutApplicantsInput>
  }

  export type UserUpsertWithoutApplicantInput = {
    update: XOR<UserUpdateWithoutApplicantInput, UserUncheckedUpdateWithoutApplicantInput>
    create: XOR<UserCreateWithoutApplicantInput, UserUncheckedCreateWithoutApplicantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicantInput, UserUncheckedUpdateWithoutApplicantInput>
  }

  export type UserUpdateWithoutApplicantInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUpdateOneWithoutUserNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    agentChats?: ChatRoomUpdateManyWithoutAgentNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUncheckedUpdateOneWithoutUserNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    agentChats?: ChatRoomUncheckedUpdateManyWithoutAgentNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<ApplicationCreateWithoutApplicantInput, ApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutApplicantInput, ApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: IntFilter<"Application"> | number
    status?: StringFilter<"Application"> | string
    jobId?: IntFilter<"Application"> | number
    applicantId?: IntFilter<"Application"> | number
    createdAt?: DateTimeFilter<"Application"> | Date | string
  }

  export type AcademicQualificationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: AcademicQualificationWhereUniqueInput
    update: XOR<AcademicQualificationUpdateWithoutApplicantInput, AcademicQualificationUncheckedUpdateWithoutApplicantInput>
    create: XOR<AcademicQualificationCreateWithoutApplicantInput, AcademicQualificationUncheckedCreateWithoutApplicantInput>
  }

  export type AcademicQualificationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: AcademicQualificationWhereUniqueInput
    data: XOR<AcademicQualificationUpdateWithoutApplicantInput, AcademicQualificationUncheckedUpdateWithoutApplicantInput>
  }

  export type AcademicQualificationUpdateManyWithWhereWithoutApplicantInput = {
    where: AcademicQualificationScalarWhereInput
    data: XOR<AcademicQualificationUpdateManyMutationInput, AcademicQualificationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type AcademicQualificationScalarWhereInput = {
    AND?: AcademicQualificationScalarWhereInput | AcademicQualificationScalarWhereInput[]
    OR?: AcademicQualificationScalarWhereInput[]
    NOT?: AcademicQualificationScalarWhereInput | AcademicQualificationScalarWhereInput[]
    id?: IntFilter<"AcademicQualification"> | number
    level?: StringFilter<"AcademicQualification"> | string
    country?: StringFilter<"AcademicQualification"> | string
    institution?: StringFilter<"AcademicQualification"> | string
    fieldOfStudy?: StringFilter<"AcademicQualification"> | string
    startDate?: DateTimeFilter<"AcademicQualification"> | Date | string
    endDate?: DateTimeNullableFilter<"AcademicQualification"> | Date | string | null
    certificateUrl?: StringNullableFilter<"AcademicQualification"> | string | null
    applicantId?: IntFilter<"AcademicQualification"> | number
  }

  export type WorkExperienceUpsertWithWhereUniqueWithoutApplicantInput = {
    where: WorkExperienceWhereUniqueInput
    update: XOR<WorkExperienceUpdateWithoutApplicantInput, WorkExperienceUncheckedUpdateWithoutApplicantInput>
    create: XOR<WorkExperienceCreateWithoutApplicantInput, WorkExperienceUncheckedCreateWithoutApplicantInput>
  }

  export type WorkExperienceUpdateWithWhereUniqueWithoutApplicantInput = {
    where: WorkExperienceWhereUniqueInput
    data: XOR<WorkExperienceUpdateWithoutApplicantInput, WorkExperienceUncheckedUpdateWithoutApplicantInput>
  }

  export type WorkExperienceUpdateManyWithWhereWithoutApplicantInput = {
    where: WorkExperienceScalarWhereInput
    data: XOR<WorkExperienceUpdateManyMutationInput, WorkExperienceUncheckedUpdateManyWithoutApplicantInput>
  }

  export type WorkExperienceScalarWhereInput = {
    AND?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    OR?: WorkExperienceScalarWhereInput[]
    NOT?: WorkExperienceScalarWhereInput | WorkExperienceScalarWhereInput[]
    id?: IntFilter<"WorkExperience"> | number
    institution?: StringFilter<"WorkExperience"> | string
    institutionAddress?: StringNullableFilter<"WorkExperience"> | string | null
    jobTitle?: StringFilter<"WorkExperience"> | string
    startDate?: DateTimeFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    duties?: StringNullableFilter<"WorkExperience"> | string | null
    supervisorName?: StringNullableFilter<"WorkExperience"> | string | null
    supervisorTel?: StringNullableFilter<"WorkExperience"> | string | null
    supervisorAddress?: StringNullableFilter<"WorkExperience"> | string | null
    applicantId?: IntFilter<"WorkExperience"> | number
  }

  export type LanguageProficiencyUpsertWithWhereUniqueWithoutApplicantInput = {
    where: LanguageProficiencyWhereUniqueInput
    update: XOR<LanguageProficiencyUpdateWithoutApplicantInput, LanguageProficiencyUncheckedUpdateWithoutApplicantInput>
    create: XOR<LanguageProficiencyCreateWithoutApplicantInput, LanguageProficiencyUncheckedCreateWithoutApplicantInput>
  }

  export type LanguageProficiencyUpdateWithWhereUniqueWithoutApplicantInput = {
    where: LanguageProficiencyWhereUniqueInput
    data: XOR<LanguageProficiencyUpdateWithoutApplicantInput, LanguageProficiencyUncheckedUpdateWithoutApplicantInput>
  }

  export type LanguageProficiencyUpdateManyWithWhereWithoutApplicantInput = {
    where: LanguageProficiencyScalarWhereInput
    data: XOR<LanguageProficiencyUpdateManyMutationInput, LanguageProficiencyUncheckedUpdateManyWithoutApplicantInput>
  }

  export type LanguageProficiencyScalarWhereInput = {
    AND?: LanguageProficiencyScalarWhereInput | LanguageProficiencyScalarWhereInput[]
    OR?: LanguageProficiencyScalarWhereInput[]
    NOT?: LanguageProficiencyScalarWhereInput | LanguageProficiencyScalarWhereInput[]
    id?: IntFilter<"LanguageProficiency"> | number
    language?: StringFilter<"LanguageProficiency"> | string
    speak?: StringFilter<"LanguageProficiency"> | string
    read?: StringFilter<"LanguageProficiency"> | string
    write?: StringFilter<"LanguageProficiency"> | string
    applicantId?: IntFilter<"LanguageProficiency"> | number
  }

  export type ComputerSkillUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ComputerSkillWhereUniqueInput
    update: XOR<ComputerSkillUpdateWithoutApplicantInput, ComputerSkillUncheckedUpdateWithoutApplicantInput>
    create: XOR<ComputerSkillCreateWithoutApplicantInput, ComputerSkillUncheckedCreateWithoutApplicantInput>
  }

  export type ComputerSkillUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ComputerSkillWhereUniqueInput
    data: XOR<ComputerSkillUpdateWithoutApplicantInput, ComputerSkillUncheckedUpdateWithoutApplicantInput>
  }

  export type ComputerSkillUpdateManyWithWhereWithoutApplicantInput = {
    where: ComputerSkillScalarWhereInput
    data: XOR<ComputerSkillUpdateManyMutationInput, ComputerSkillUncheckedUpdateManyWithoutApplicantInput>
  }

  export type ComputerSkillScalarWhereInput = {
    AND?: ComputerSkillScalarWhereInput | ComputerSkillScalarWhereInput[]
    OR?: ComputerSkillScalarWhereInput[]
    NOT?: ComputerSkillScalarWhereInput | ComputerSkillScalarWhereInput[]
    id?: IntFilter<"ComputerSkill"> | number
    skill?: StringFilter<"ComputerSkill"> | string
    proficiency?: StringFilter<"ComputerSkill"> | string
    applicantId?: IntFilter<"ComputerSkill"> | number
  }

  export type NotificationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutApplicantInput, NotificationUncheckedUpdateWithoutApplicantInput>
    create: XOR<NotificationCreateWithoutApplicantInput, NotificationUncheckedCreateWithoutApplicantInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutApplicantInput, NotificationUncheckedUpdateWithoutApplicantInput>
  }

  export type NotificationUpdateManyWithWhereWithoutApplicantInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    applicantId?: IntNullableFilter<"Notification"> | number | null
    employerId?: IntNullableFilter<"Notification"> | number | null
    applicationId?: IntNullableFilter<"Notification"> | number | null
  }

  export type JobCategoryUpsertWithWhereUniqueWithoutApplicantsInput = {
    where: JobCategoryWhereUniqueInput
    update: XOR<JobCategoryUpdateWithoutApplicantsInput, JobCategoryUncheckedUpdateWithoutApplicantsInput>
    create: XOR<JobCategoryCreateWithoutApplicantsInput, JobCategoryUncheckedCreateWithoutApplicantsInput>
  }

  export type JobCategoryUpdateWithWhereUniqueWithoutApplicantsInput = {
    where: JobCategoryWhereUniqueInput
    data: XOR<JobCategoryUpdateWithoutApplicantsInput, JobCategoryUncheckedUpdateWithoutApplicantsInput>
  }

  export type JobCategoryUpdateManyWithWhereWithoutApplicantsInput = {
    where: JobCategoryScalarWhereInput
    data: XOR<JobCategoryUpdateManyMutationInput, JobCategoryUncheckedUpdateManyWithoutApplicantsInput>
  }

  export type JobCategoryScalarWhereInput = {
    AND?: JobCategoryScalarWhereInput | JobCategoryScalarWhereInput[]
    OR?: JobCategoryScalarWhereInput[]
    NOT?: JobCategoryScalarWhereInput | JobCategoryScalarWhereInput[]
    id?: IntFilter<"JobCategory"> | number
    name?: StringFilter<"JobCategory"> | string
    description?: StringNullableFilter<"JobCategory"> | string | null
  }

  export type UserCreateWithoutEmployerInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    agentChats?: ChatRoomCreateNestedManyWithoutAgentInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutEmployerInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    agentChats?: ChatRoomUncheckedCreateNestedManyWithoutAgentInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutEmployerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployerInput, UserUncheckedCreateWithoutEmployerInput>
  }

  export type JobCreateWithoutEmployerInput = {
    title: string
    description: string
    location?: string | null
    status?: string
    applicants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutJobInput
    categories?: JobCategoryCreateNestedManyWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutEmployerInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    applicants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
    categories?: JobCategoryUncheckedCreateNestedManyWithoutJobsInput
  }

  export type JobCreateOrConnectWithoutEmployerInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput>
  }

  export type JobCreateManyEmployerInputEnvelope = {
    data: JobCreateManyEmployerInput | JobCreateManyEmployerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutEmployerInput = {
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    applicant?: ApplicantCreateNestedOneWithoutNotificationsInput
    application?: ApplicationCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutEmployerInput = {
    id?: number
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    applicantId?: number | null
    applicationId?: number | null
  }

  export type NotificationCreateOrConnectWithoutEmployerInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutEmployerInput, NotificationUncheckedCreateWithoutEmployerInput>
  }

  export type NotificationCreateManyEmployerInputEnvelope = {
    data: NotificationCreateManyEmployerInput | NotificationCreateManyEmployerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEmployerInput = {
    update: XOR<UserUpdateWithoutEmployerInput, UserUncheckedUpdateWithoutEmployerInput>
    create: XOR<UserCreateWithoutEmployerInput, UserUncheckedCreateWithoutEmployerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployerInput, UserUncheckedUpdateWithoutEmployerInput>
  }

  export type UserUpdateWithoutEmployerInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneWithoutUserNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    agentChats?: ChatRoomUpdateManyWithoutAgentNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    agentChats?: ChatRoomUncheckedUpdateManyWithoutAgentNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type JobUpsertWithWhereUniqueWithoutEmployerInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutEmployerInput, JobUncheckedUpdateWithoutEmployerInput>
    create: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput>
  }

  export type JobUpdateWithWhereUniqueWithoutEmployerInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutEmployerInput, JobUncheckedUpdateWithoutEmployerInput>
  }

  export type JobUpdateManyWithWhereWithoutEmployerInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutEmployerInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutEmployerInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutEmployerInput, NotificationUncheckedUpdateWithoutEmployerInput>
    create: XOR<NotificationCreateWithoutEmployerInput, NotificationUncheckedCreateWithoutEmployerInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutEmployerInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutEmployerInput, NotificationUncheckedUpdateWithoutEmployerInput>
  }

  export type NotificationUpdateManyWithWhereWithoutEmployerInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutEmployerInput>
  }

  export type EmployerCreateWithoutJobsInput = {
    companyName: string
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmployerInput
    notifications?: NotificationCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUncheckedCreateWithoutJobsInput = {
    id?: number
    companyName: string
    address: string
    userId: number
    createdAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutEmployerInput
  }

  export type EmployerCreateOrConnectWithoutJobsInput = {
    where: EmployerWhereUniqueInput
    create: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
  }

  export type ApplicationCreateWithoutJobInput = {
    status?: string
    createdAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutApplicationsInput
    notifications?: NotificationCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutJobInput = {
    id?: number
    status?: string
    applicantId: number
    createdAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationCreateManyJobInputEnvelope = {
    data: ApplicationCreateManyJobInput | ApplicationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type JobCategoryCreateWithoutJobsInput = {
    name: string
    description?: string | null
    applicants?: ApplicantCreateNestedManyWithoutCategoriesInput
  }

  export type JobCategoryUncheckedCreateWithoutJobsInput = {
    id?: number
    name: string
    description?: string | null
    applicants?: ApplicantUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type JobCategoryCreateOrConnectWithoutJobsInput = {
    where: JobCategoryWhereUniqueInput
    create: XOR<JobCategoryCreateWithoutJobsInput, JobCategoryUncheckedCreateWithoutJobsInput>
  }

  export type EmployerUpsertWithoutJobsInput = {
    update: XOR<EmployerUpdateWithoutJobsInput, EmployerUncheckedUpdateWithoutJobsInput>
    create: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
    where?: EmployerWhereInput
  }

  export type EmployerUpdateToOneWithWhereWithoutJobsInput = {
    where?: EmployerWhereInput
    data: XOR<EmployerUpdateWithoutJobsInput, EmployerUncheckedUpdateWithoutJobsInput>
  }

  export type EmployerUpdateWithoutJobsInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployerNestedInput
    notifications?: NotificationUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutEmployerNestedInput
  }

  export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutJobInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type JobCategoryUpsertWithWhereUniqueWithoutJobsInput = {
    where: JobCategoryWhereUniqueInput
    update: XOR<JobCategoryUpdateWithoutJobsInput, JobCategoryUncheckedUpdateWithoutJobsInput>
    create: XOR<JobCategoryCreateWithoutJobsInput, JobCategoryUncheckedCreateWithoutJobsInput>
  }

  export type JobCategoryUpdateWithWhereUniqueWithoutJobsInput = {
    where: JobCategoryWhereUniqueInput
    data: XOR<JobCategoryUpdateWithoutJobsInput, JobCategoryUncheckedUpdateWithoutJobsInput>
  }

  export type JobCategoryUpdateManyWithWhereWithoutJobsInput = {
    where: JobCategoryScalarWhereInput
    data: XOR<JobCategoryUpdateManyMutationInput, JobCategoryUncheckedUpdateManyWithoutJobsInput>
  }

  export type JobCreateWithoutApplicationsInput = {
    title: string
    description: string
    location?: string | null
    status?: string
    applicants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: EmployerCreateNestedOneWithoutJobsInput
    categories?: JobCategoryCreateNestedManyWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    applicants?: number
    employerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: JobCategoryUncheckedCreateNestedManyWithoutJobsInput
  }

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
  }

  export type ApplicantCreateWithoutApplicationsInput = {
    fullName: string
    nida: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    qualifications?: AcademicQualificationCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillCreateNestedManyWithoutApplicantInput
    notifications?: NotificationCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantUncheckedCreateWithoutApplicationsInput = {
    id?: number
    fullName: string
    nida: string
    userId: number
    createdAt?: Date | string
    qualifications?: AcademicQualificationUncheckedCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyUncheckedCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantCreateOrConnectWithoutApplicationsInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
  }

  export type NotificationCreateWithoutApplicationInput = {
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    applicant?: ApplicantCreateNestedOneWithoutNotificationsInput
    employer?: EmployerCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutApplicationInput = {
    id?: number
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    applicantId?: number | null
    employerId?: number | null
  }

  export type NotificationCreateOrConnectWithoutApplicationInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutApplicationInput, NotificationUncheckedCreateWithoutApplicationInput>
  }

  export type NotificationCreateManyApplicationInputEnvelope = {
    data: NotificationCreateManyApplicationInput | NotificationCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobCreateWithoutApplicationsInput, JobUncheckedCreateWithoutApplicationsInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutApplicationsInput, JobUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobUpdateWithoutApplicationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUpdateOneRequiredWithoutJobsNestedInput
    categories?: JobCategoryUpdateManyWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    employerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: JobCategoryUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type ApplicantUpsertWithoutApplicationsInput = {
    update: XOR<ApplicantUpdateWithoutApplicationsInput, ApplicantUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutApplicationsInput, ApplicantUncheckedUpdateWithoutApplicationsInput>
  }

  export type ApplicantUpdateWithoutApplicationsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualifications?: AcademicQualificationUncheckedUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUncheckedUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUncheckedUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutApplicationInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutApplicationInput, NotificationUncheckedUpdateWithoutApplicationInput>
    create: XOR<NotificationCreateWithoutApplicationInput, NotificationUncheckedCreateWithoutApplicationInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutApplicationInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutApplicationInput, NotificationUncheckedUpdateWithoutApplicationInput>
  }

  export type NotificationUpdateManyWithWhereWithoutApplicationInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicantCreateWithoutNotificationsInput = {
    fullName: string
    nida: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantUncheckedCreateWithoutNotificationsInput = {
    id?: number
    fullName: string
    nida: string
    userId: number
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationUncheckedCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyUncheckedCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillUncheckedCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantCreateOrConnectWithoutNotificationsInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutNotificationsInput, ApplicantUncheckedCreateWithoutNotificationsInput>
  }

  export type EmployerCreateWithoutNotificationsInput = {
    companyName: string
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmployerInput
    jobs?: JobCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUncheckedCreateWithoutNotificationsInput = {
    id?: number
    companyName: string
    address: string
    userId: number
    createdAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutEmployerInput
  }

  export type EmployerCreateOrConnectWithoutNotificationsInput = {
    where: EmployerWhereUniqueInput
    create: XOR<EmployerCreateWithoutNotificationsInput, EmployerUncheckedCreateWithoutNotificationsInput>
  }

  export type ApplicationCreateWithoutNotificationsInput = {
    status?: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
    applicant: ApplicantCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutNotificationsInput = {
    id?: number
    status?: string
    jobId: number
    applicantId: number
    createdAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutNotificationsInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutNotificationsInput, ApplicationUncheckedCreateWithoutNotificationsInput>
  }

  export type ApplicantUpsertWithoutNotificationsInput = {
    update: XOR<ApplicantUpdateWithoutNotificationsInput, ApplicantUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ApplicantCreateWithoutNotificationsInput, ApplicantUncheckedCreateWithoutNotificationsInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutNotificationsInput, ApplicantUncheckedUpdateWithoutNotificationsInput>
  }

  export type ApplicantUpdateWithoutNotificationsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUncheckedUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUncheckedUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUncheckedUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUncheckedUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type EmployerUpsertWithoutNotificationsInput = {
    update: XOR<EmployerUpdateWithoutNotificationsInput, EmployerUncheckedUpdateWithoutNotificationsInput>
    create: XOR<EmployerCreateWithoutNotificationsInput, EmployerUncheckedCreateWithoutNotificationsInput>
    where?: EmployerWhereInput
  }

  export type EmployerUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: EmployerWhereInput
    data: XOR<EmployerUpdateWithoutNotificationsInput, EmployerUncheckedUpdateWithoutNotificationsInput>
  }

  export type EmployerUpdateWithoutNotificationsInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployerNestedInput
    jobs?: JobUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutEmployerNestedInput
  }

  export type ApplicationUpsertWithoutNotificationsInput = {
    update: XOR<ApplicationUpdateWithoutNotificationsInput, ApplicationUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ApplicationCreateWithoutNotificationsInput, ApplicationUncheckedCreateWithoutNotificationsInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutNotificationsInput, ApplicationUncheckedUpdateWithoutNotificationsInput>
  }

  export type ApplicationUpdateWithoutNotificationsInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    applicant?: ApplicantUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    jobId?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicantCreateWithoutQualificationsInput = {
    fullName: string
    nida: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillCreateNestedManyWithoutApplicantInput
    notifications?: NotificationCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantUncheckedCreateWithoutQualificationsInput = {
    id?: number
    fullName: string
    nida: string
    userId: number
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyUncheckedCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantCreateOrConnectWithoutQualificationsInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutQualificationsInput, ApplicantUncheckedCreateWithoutQualificationsInput>
  }

  export type ApplicantUpsertWithoutQualificationsInput = {
    update: XOR<ApplicantUpdateWithoutQualificationsInput, ApplicantUncheckedUpdateWithoutQualificationsInput>
    create: XOR<ApplicantCreateWithoutQualificationsInput, ApplicantUncheckedCreateWithoutQualificationsInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutQualificationsInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutQualificationsInput, ApplicantUncheckedUpdateWithoutQualificationsInput>
  }

  export type ApplicantUpdateWithoutQualificationsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutQualificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUncheckedUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUncheckedUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantCreateWithoutExperiencesInput = {
    fullName: string
    nida: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillCreateNestedManyWithoutApplicantInput
    notifications?: NotificationCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantUncheckedCreateWithoutExperiencesInput = {
    id?: number
    fullName: string
    nida: string
    userId: number
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationUncheckedCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyUncheckedCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantCreateOrConnectWithoutExperiencesInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutExperiencesInput, ApplicantUncheckedCreateWithoutExperiencesInput>
  }

  export type ApplicantUpsertWithoutExperiencesInput = {
    update: XOR<ApplicantUpdateWithoutExperiencesInput, ApplicantUncheckedUpdateWithoutExperiencesInput>
    create: XOR<ApplicantCreateWithoutExperiencesInput, ApplicantUncheckedCreateWithoutExperiencesInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutExperiencesInput, ApplicantUncheckedUpdateWithoutExperiencesInput>
  }

  export type ApplicantUpdateWithoutExperiencesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutExperiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUncheckedUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUncheckedUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantCreateWithoutLanguagesInput = {
    fullName: string
    nida: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillCreateNestedManyWithoutApplicantInput
    notifications?: NotificationCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantUncheckedCreateWithoutLanguagesInput = {
    id?: number
    fullName: string
    nida: string
    userId: number
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationUncheckedCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantCreateOrConnectWithoutLanguagesInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutLanguagesInput, ApplicantUncheckedCreateWithoutLanguagesInput>
  }

  export type ApplicantUpsertWithoutLanguagesInput = {
    update: XOR<ApplicantUpdateWithoutLanguagesInput, ApplicantUncheckedUpdateWithoutLanguagesInput>
    create: XOR<ApplicantCreateWithoutLanguagesInput, ApplicantUncheckedCreateWithoutLanguagesInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutLanguagesInput, ApplicantUncheckedUpdateWithoutLanguagesInput>
  }

  export type ApplicantUpdateWithoutLanguagesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutLanguagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUncheckedUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUncheckedUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantCreateWithoutSkillsInput = {
    fullName: string
    nida: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutApplicantInput
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyCreateNestedManyWithoutApplicantInput
    notifications?: NotificationCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantUncheckedCreateWithoutSkillsInput = {
    id?: number
    fullName: string
    nida: string
    userId: number
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationUncheckedCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantCreateOrConnectWithoutSkillsInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutSkillsInput, ApplicantUncheckedCreateWithoutSkillsInput>
  }

  export type ApplicantUpsertWithoutSkillsInput = {
    update: XOR<ApplicantUpdateWithoutSkillsInput, ApplicantUncheckedUpdateWithoutSkillsInput>
    create: XOR<ApplicantCreateWithoutSkillsInput, ApplicantUncheckedCreateWithoutSkillsInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutSkillsInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutSkillsInput, ApplicantUncheckedUpdateWithoutSkillsInput>
  }

  export type ApplicantUpdateWithoutSkillsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUncheckedUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUncheckedUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type UserCreateWithoutChatRoomsInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
    employer?: EmployerCreateNestedOneWithoutUserInput
    agentChats?: ChatRoomCreateNestedManyWithoutAgentInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutChatRoomsInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput
    employer?: EmployerUncheckedCreateNestedOneWithoutUserInput
    agentChats?: ChatRoomUncheckedCreateNestedManyWithoutAgentInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutChatRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
  }

  export type UserCreateWithoutAgentChatsInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
    employer?: EmployerCreateNestedOneWithoutUserInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutAgentChatsInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput
    employer?: EmployerUncheckedCreateNestedOneWithoutUserInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutAgentChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgentChatsInput, UserUncheckedCreateWithoutAgentChatsInput>
  }

  export type ChatMessageCreateWithoutRoomInput = {
    message: string
    type?: string
    isRead?: boolean
    readAt?: Date | string | null
    timestamp?: Date | string
    sender?: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutRoomInput = {
    id?: number
    senderId?: number | null
    message: string
    type?: string
    isRead?: boolean
    readAt?: Date | string | null
    timestamp?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutRoomInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput>
  }

  export type ChatMessageCreateManyRoomInputEnvelope = {
    data: ChatMessageCreateManyRoomInput | ChatMessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatRoomsInput = {
    update: XOR<UserUpdateWithoutChatRoomsInput, UserUncheckedUpdateWithoutChatRoomsInput>
    create: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatRoomsInput, UserUncheckedUpdateWithoutChatRoomsInput>
  }

  export type UserUpdateWithoutChatRoomsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneWithoutUserNestedInput
    employer?: EmployerUpdateOneWithoutUserNestedInput
    agentChats?: ChatRoomUpdateManyWithoutAgentNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput
    employer?: EmployerUncheckedUpdateOneWithoutUserNestedInput
    agentChats?: ChatRoomUncheckedUpdateManyWithoutAgentNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutAgentChatsInput = {
    update: XOR<UserUpdateWithoutAgentChatsInput, UserUncheckedUpdateWithoutAgentChatsInput>
    create: XOR<UserCreateWithoutAgentChatsInput, UserUncheckedCreateWithoutAgentChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgentChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgentChatsInput, UserUncheckedUpdateWithoutAgentChatsInput>
  }

  export type UserUpdateWithoutAgentChatsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneWithoutUserNestedInput
    employer?: EmployerUpdateOneWithoutUserNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutAgentChatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput
    employer?: EmployerUncheckedUpdateOneWithoutUserNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutRoomInput, ChatMessageUncheckedUpdateWithoutRoomInput>
    create: XOR<ChatMessageCreateWithoutRoomInput, ChatMessageUncheckedCreateWithoutRoomInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutRoomInput, ChatMessageUncheckedUpdateWithoutRoomInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutRoomInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    roomId?: IntFilter<"ChatMessage"> | number
    senderId?: IntNullableFilter<"ChatMessage"> | number | null
    message?: StringFilter<"ChatMessage"> | string
    type?: StringFilter<"ChatMessage"> | string
    isRead?: BoolFilter<"ChatMessage"> | boolean
    readAt?: DateTimeNullableFilter<"ChatMessage"> | Date | string | null
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatRoomCreateWithoutMessagesInput = {
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    user: UserCreateNestedOneWithoutChatRoomsInput
    agent?: UserCreateNestedOneWithoutAgentChatsInput
  }

  export type ChatRoomUncheckedCreateWithoutMessagesInput = {
    id?: number
    userId: number
    agentId?: number | null
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
  }

  export type ChatRoomCreateOrConnectWithoutMessagesInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutChatMessagesInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
    employer?: EmployerCreateNestedOneWithoutUserInput
    chatRooms?: ChatRoomCreateNestedManyWithoutUserInput
    agentChats?: ChatRoomCreateNestedManyWithoutAgentInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput
    employer?: EmployerUncheckedCreateNestedOneWithoutUserInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutUserInput
    agentChats?: ChatRoomUncheckedCreateNestedManyWithoutAgentInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type ChatRoomUpsertWithoutMessagesInput = {
    update: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatRoomUpdateWithoutMessagesInput = {
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutChatRoomsNestedInput
    agent?: UserUpdateOneWithoutAgentChatsNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneWithoutUserNestedInput
    employer?: EmployerUpdateOneWithoutUserNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutUserNestedInput
    agentChats?: ChatRoomUpdateManyWithoutAgentNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput
    employer?: EmployerUncheckedUpdateOneWithoutUserNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutUserNestedInput
    agentChats?: ChatRoomUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type ApplicantCreateWithoutUserInput = {
    fullName: string
    nida: string
    createdAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillCreateNestedManyWithoutApplicantInput
    notifications?: NotificationCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantUncheckedCreateWithoutUserInput = {
    id?: number
    fullName: string
    nida: string
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationUncheckedCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceUncheckedCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyUncheckedCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillUncheckedCreateNestedManyWithoutApplicantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutApplicantInput
    categories?: JobCategoryUncheckedCreateNestedManyWithoutApplicantsInput
  }

  export type ApplicantCreateOrConnectWithoutUserInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
  }

  export type EmployerCreateWithoutUserInput = {
    companyName: string
    address: string
    createdAt?: Date | string
    jobs?: JobCreateNestedManyWithoutEmployerInput
    notifications?: NotificationCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    address: string
    createdAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutEmployerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutEmployerInput
  }

  export type EmployerCreateOrConnectWithoutUserInput = {
    where: EmployerWhereUniqueInput
    create: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomCreateWithoutUserInput = {
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    agent?: UserCreateNestedOneWithoutAgentChatsInput
    messages?: ChatMessageCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutUserInput = {
    id?: number
    agentId?: number | null
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    messages?: ChatMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomCreateManyUserInputEnvelope = {
    data: ChatRoomCreateManyUserInput | ChatRoomCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutAgentInput = {
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    user: UserCreateNestedOneWithoutChatRoomsInput
    messages?: ChatMessageCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutAgentInput = {
    id?: number
    userId: number
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
    messages?: ChatMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutAgentInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutAgentInput, ChatRoomUncheckedCreateWithoutAgentInput>
  }

  export type ChatRoomCreateManyAgentInputEnvelope = {
    data: ChatRoomCreateManyAgentInput | ChatRoomCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutSenderInput = {
    message: string
    type?: string
    isRead?: boolean
    readAt?: Date | string | null
    timestamp?: Date | string
    room: ChatRoomCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutSenderInput = {
    id?: number
    roomId: number
    message: string
    type?: string
    isRead?: boolean
    readAt?: Date | string | null
    timestamp?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageCreateManySenderInputEnvelope = {
    data: ChatMessageCreateManySenderInput | ChatMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ApplicantUpsertWithoutUserInput = {
    update: XOR<ApplicantUpdateWithoutUserInput, ApplicantUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicantCreateWithoutUserInput, ApplicantUncheckedCreateWithoutUserInput>
    where?: ApplicantWhereInput
  }

  export type ApplicantUpdateToOneWithWhereWithoutUserInput = {
    where?: ApplicantWhereInput
    data: XOR<ApplicantUpdateWithoutUserInput, ApplicantUncheckedUpdateWithoutUserInput>
  }

  export type ApplicantUpdateWithoutUserInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUpdateManyWithoutApplicantsNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUncheckedUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUncheckedUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUncheckedUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutApplicantNestedInput
    categories?: JobCategoryUncheckedUpdateManyWithoutApplicantsNestedInput
  }

  export type EmployerUpsertWithoutUserInput = {
    update: XOR<EmployerUpdateWithoutUserInput, EmployerUncheckedUpdateWithoutUserInput>
    create: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
    where?: EmployerWhereInput
  }

  export type EmployerUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployerWhereInput
    data: XOR<EmployerUpdateWithoutUserInput, EmployerUncheckedUpdateWithoutUserInput>
  }

  export type EmployerUpdateWithoutUserInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutEmployerNestedInput
    notifications?: NotificationUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutEmployerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutEmployerNestedInput
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutUserInput, ChatRoomUncheckedUpdateWithoutUserInput>
    create: XOR<ChatRoomCreateWithoutUserInput, ChatRoomUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutUserInput, ChatRoomUncheckedUpdateWithoutUserInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutUserInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: IntFilter<"ChatRoom"> | number
    userId?: IntFilter<"ChatRoom"> | number
    agentId?: IntNullableFilter<"ChatRoom"> | number | null
    topic?: StringNullableFilter<"ChatRoom"> | string | null
    status?: StringFilter<"ChatRoom"> | string
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    endedAt?: DateTimeNullableFilter<"ChatRoom"> | Date | string | null
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutAgentInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutAgentInput, ChatRoomUncheckedUpdateWithoutAgentInput>
    create: XOR<ChatRoomCreateWithoutAgentInput, ChatRoomUncheckedCreateWithoutAgentInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutAgentInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutAgentInput, ChatRoomUncheckedUpdateWithoutAgentInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutAgentInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutAgentInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type ApplicantUpdateWithoutCategoriesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApplicantNestedInput
    applications?: ApplicationUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    qualifications?: AcademicQualificationUncheckedUpdateManyWithoutApplicantNestedInput
    experiences?: WorkExperienceUncheckedUpdateManyWithoutApplicantNestedInput
    languages?: LanguageProficiencyUncheckedUpdateManyWithoutApplicantNestedInput
    skills?: ComputerSkillUncheckedUpdateManyWithoutApplicantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutApplicantNestedInput
  }

  export type ApplicantUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nida?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUpdateOneRequiredWithoutJobsNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    employerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    employerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: number
    status?: string
    jobId: number
    createdAt?: Date | string
  }

  export type AcademicQualificationCreateManyApplicantInput = {
    id?: number
    level: string
    country: string
    institution: string
    fieldOfStudy: string
    startDate: Date | string
    endDate?: Date | string | null
    certificateUrl?: string | null
  }

  export type WorkExperienceCreateManyApplicantInput = {
    id?: number
    institution: string
    institutionAddress?: string | null
    jobTitle: string
    startDate: Date | string
    endDate?: Date | string | null
    duties?: string | null
    supervisorName?: string | null
    supervisorTel?: string | null
    supervisorAddress?: string | null
  }

  export type LanguageProficiencyCreateManyApplicantInput = {
    id?: number
    language: string
    speak: string
    read: string
    write: string
  }

  export type ComputerSkillCreateManyApplicantInput = {
    id?: number
    skill: string
    proficiency: string
  }

  export type NotificationCreateManyApplicantInput = {
    id?: number
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    employerId?: number | null
    applicationId?: number | null
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    notifications?: NotificationUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    jobId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    jobId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicQualificationUpdateWithoutApplicantInput = {
    level?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AcademicQualificationUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AcademicQualificationUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceUpdateWithoutApplicantInput = {
    institution?: StringFieldUpdateOperationsInput | string
    institutionAddress?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duties?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorTel?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    institutionAddress?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duties?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorTel?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    institutionAddress?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duties?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorTel?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorAddress?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LanguageProficiencyUpdateWithoutApplicantInput = {
    language?: StringFieldUpdateOperationsInput | string
    speak?: StringFieldUpdateOperationsInput | string
    read?: StringFieldUpdateOperationsInput | string
    write?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageProficiencyUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    speak?: StringFieldUpdateOperationsInput | string
    read?: StringFieldUpdateOperationsInput | string
    write?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageProficiencyUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    speak?: StringFieldUpdateOperationsInput | string
    read?: StringFieldUpdateOperationsInput | string
    write?: StringFieldUpdateOperationsInput | string
  }

  export type ComputerSkillUpdateWithoutApplicantInput = {
    skill?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
  }

  export type ComputerSkillUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
  }

  export type ComputerSkillUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    skill?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutApplicantInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employer?: EmployerUpdateOneWithoutNotificationsNestedInput
    application?: ApplicationUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employerId?: NullableIntFieldUpdateOperationsInput | number | null
    applicationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employerId?: NullableIntFieldUpdateOperationsInput | number | null
    applicationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type JobCategoryUpdateWithoutApplicantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: JobUpdateManyWithoutCategoriesNestedInput
  }

  export type JobCategoryUncheckedUpdateWithoutApplicantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    jobs?: JobUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type JobCategoryUncheckedUpdateManyWithoutApplicantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JobCreateManyEmployerInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    applicants?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyEmployerInput = {
    id?: number
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    applicantId?: number | null
    applicationId?: number | null
  }

  export type JobUpdateWithoutEmployerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutJobNestedInput
    categories?: JobCategoryUpdateManyWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
    categories?: JobCategoryUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateManyWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    applicants?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutEmployerInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicant?: ApplicantUpdateOneWithoutNotificationsNestedInput
    application?: ApplicationUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicantId?: NullableIntFieldUpdateOperationsInput | number | null
    applicationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationUncheckedUpdateManyWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicantId?: NullableIntFieldUpdateOperationsInput | number | null
    applicationId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationCreateManyJobInput = {
    id?: number
    status?: string
    applicantId: number
    createdAt?: Date | string
  }

  export type ApplicationUpdateWithoutJobInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneRequiredWithoutApplicationsNestedInput
    notifications?: NotificationUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCategoryUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicants?: ApplicantUpdateManyWithoutCategoriesNestedInput
  }

  export type JobCategoryUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicants?: ApplicantUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type JobCategoryUncheckedUpdateManyWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyApplicationInput = {
    id?: number
    type: $Enums.NotificationType
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    readAt?: Date | string | null
    expiresAt?: Date | string | null
    applicantId?: number | null
    employerId?: number | null
  }

  export type NotificationUpdateWithoutApplicationInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicant?: ApplicantUpdateOneWithoutNotificationsNestedInput
    employer?: EmployerUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicantId?: NullableIntFieldUpdateOperationsInput | number | null
    employerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificationUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicantId?: NullableIntFieldUpdateOperationsInput | number | null
    employerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatMessageCreateManyRoomInput = {
    id?: number
    senderId?: number | null
    message: string
    type?: string
    isRead?: boolean
    readAt?: Date | string | null
    timestamp?: Date | string
  }

  export type ChatMessageUpdateWithoutRoomInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomCreateManyUserInput = {
    id?: number
    agentId?: number | null
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
  }

  export type ChatRoomCreateManyAgentInput = {
    id?: number
    userId: number
    topic?: string | null
    status?: string
    createdAt?: Date | string
    endedAt?: Date | string | null
  }

  export type ChatMessageCreateManySenderInput = {
    id?: number
    roomId: number
    message: string
    type?: string
    isRead?: boolean
    readAt?: Date | string | null
    timestamp?: Date | string
  }

  export type ChatRoomUpdateWithoutUserInput = {
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    agent?: UserUpdateOneWithoutAgentChatsNestedInput
    messages?: ChatMessageUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: ChatMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    agentId?: NullableIntFieldUpdateOperationsInput | number | null
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRoomUpdateWithoutAgentInput = {
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutChatRoomsNestedInput
    messages?: ChatMessageUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: ChatMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatMessageUpdateWithoutSenderInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
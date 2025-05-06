
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
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
 * Enums
 */
export namespace $Enums {
  export const Role: {
  APPLICANT: 'APPLICANT',
  EMPLOYER: 'EMPLOYER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Applicant: 'Applicant',
    Employer: 'Employer',
    Job: 'Job',
    Application: 'Application',
    AcademicQualification: 'AcademicQualification',
    WorkExperience: 'WorkExperience',
    LanguageProficiency: 'LanguageProficiency',
    ComputerSkill: 'ComputerSkill'
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
      modelProps: "user" | "applicant" | "employer" | "job" | "application" | "academicQualification" | "workExperience" | "languageProficiency" | "computerSkill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
    user?: UserOmit
    applicant?: ApplicantOmit
    employer?: EmployerOmit
    job?: JobOmit
    application?: ApplicationOmit
    academicQualification?: AcademicQualificationOmit
    workExperience?: WorkExperienceOmit
    languageProficiency?: LanguageProficiencyOmit
    computerSkill?: ComputerSkillOmit
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
   * Count Type ApplicantCountOutputType
   */

  export type ApplicantCountOutputType = {
    applications: number
    qualifications: number
    experiences: number
    languages: number
    skills: number
  }

  export type ApplicantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | ApplicantCountOutputTypeCountApplicationsArgs
    qualifications?: boolean | ApplicantCountOutputTypeCountQualificationsArgs
    experiences?: boolean | ApplicantCountOutputTypeCountExperiencesArgs
    languages?: boolean | ApplicantCountOutputTypeCountLanguagesArgs
    skills?: boolean | ApplicantCountOutputTypeCountSkillsArgs
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
   * Count Type EmployerCountOutputType
   */

  export type EmployerCountOutputType = {
    jobs: number
  }

  export type EmployerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | EmployerCountOutputTypeCountJobsArgs
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
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    applications: number
  }

  export type JobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs
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
   * Models
   */

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
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      applicant: Prisma.$ApplicantPayload<ExtArgs> | null
      employer: Prisma.$EmployerPayload<ExtArgs> | null
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
    _count?: boolean | EmployerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jobs: Prisma.$JobPayload<ExtArgs>[]
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
    employerId: number | null
  }

  export type JobSumAggregateOutputType = {
    id: number | null
    employerId: number | null
  }

  export type JobMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    location: string | null
    status: string | null
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
    employerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    id?: true
    employerId?: true
  }

  export type JobSumAggregateInputType = {
    id?: true
    employerId?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    status?: true
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
    employerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>



  export type JobSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    status?: boolean
    employerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "location" | "status" | "employerId" | "createdAt" | "updatedAt", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
    applications?: boolean | Job$applicationsArgs<ExtArgs>
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      employer: Prisma.$EmployerPayload<ExtArgs>
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      location: string | null
      status: string
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
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      job: Prisma.$JobPayload<ExtArgs>
      applicant: Prisma.$ApplicantPayload<ExtArgs>
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
    institution: string | null
    degree: string | null
    fieldOfStudy: string | null
    startDate: Date | null
    endDate: Date | null
    applicantId: number | null
  }

  export type AcademicQualificationMaxAggregateOutputType = {
    id: number | null
    institution: string | null
    degree: string | null
    fieldOfStudy: string | null
    startDate: Date | null
    endDate: Date | null
    applicantId: number | null
  }

  export type AcademicQualificationCountAggregateOutputType = {
    id: number
    institution: number
    degree: number
    fieldOfStudy: number
    startDate: number
    endDate: number
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
    institution?: true
    degree?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    applicantId?: true
  }

  export type AcademicQualificationMaxAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
    applicantId?: true
  }

  export type AcademicQualificationCountAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    fieldOfStudy?: true
    startDate?: true
    endDate?: true
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
    institution: string
    degree: string
    fieldOfStudy: string | null
    startDate: Date
    endDate: Date | null
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
    institution?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    applicantId?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicQualification"]>



  export type AcademicQualificationSelectScalar = {
    id?: boolean
    institution?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    startDate?: boolean
    endDate?: boolean
    applicantId?: boolean
  }

  export type AcademicQualificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institution" | "degree" | "fieldOfStudy" | "startDate" | "endDate" | "applicantId", ExtArgs["result"]["academicQualification"]>
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
      institution: string
      degree: string
      fieldOfStudy: string | null
      startDate: Date
      endDate: Date | null
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
    readonly institution: FieldRef<"AcademicQualification", 'String'>
    readonly degree: FieldRef<"AcademicQualification", 'String'>
    readonly fieldOfStudy: FieldRef<"AcademicQualification", 'String'>
    readonly startDate: FieldRef<"AcademicQualification", 'DateTime'>
    readonly endDate: FieldRef<"AcademicQualification", 'DateTime'>
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
    company: string | null
    position: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    applicantId: number | null
  }

  export type WorkExperienceMaxAggregateOutputType = {
    id: number | null
    company: string | null
    position: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    applicantId: number | null
  }

  export type WorkExperienceCountAggregateOutputType = {
    id: number
    company: number
    position: number
    startDate: number
    endDate: number
    description: number
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
    company?: true
    position?: true
    startDate?: true
    endDate?: true
    description?: true
    applicantId?: true
  }

  export type WorkExperienceMaxAggregateInputType = {
    id?: true
    company?: true
    position?: true
    startDate?: true
    endDate?: true
    description?: true
    applicantId?: true
  }

  export type WorkExperienceCountAggregateInputType = {
    id?: true
    company?: true
    position?: true
    startDate?: true
    endDate?: true
    description?: true
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
    company: string
    position: string
    startDate: Date
    endDate: Date | null
    description: string | null
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
    company?: boolean
    position?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    applicantId?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workExperience"]>



  export type WorkExperienceSelectScalar = {
    id?: boolean
    company?: boolean
    position?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    applicantId?: boolean
  }

  export type WorkExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "position" | "startDate" | "endDate" | "description" | "applicantId", ExtArgs["result"]["workExperience"]>
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
      company: string
      position: string
      startDate: Date
      endDate: Date | null
      description: string | null
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
    readonly company: FieldRef<"WorkExperience", 'String'>
    readonly position: FieldRef<"WorkExperience", 'String'>
    readonly startDate: FieldRef<"WorkExperience", 'DateTime'>
    readonly endDate: FieldRef<"WorkExperience", 'DateTime'>
    readonly description: FieldRef<"WorkExperience", 'String'>
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
    proficiency: string | null
    applicantId: number | null
  }

  export type LanguageProficiencyMaxAggregateOutputType = {
    id: number | null
    language: string | null
    proficiency: string | null
    applicantId: number | null
  }

  export type LanguageProficiencyCountAggregateOutputType = {
    id: number
    language: number
    proficiency: number
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
    proficiency?: true
    applicantId?: true
  }

  export type LanguageProficiencyMaxAggregateInputType = {
    id?: true
    language?: true
    proficiency?: true
    applicantId?: true
  }

  export type LanguageProficiencyCountAggregateInputType = {
    id?: true
    language?: true
    proficiency?: true
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
    proficiency: string
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
    proficiency?: boolean
    applicantId?: boolean
    applicant?: boolean | ApplicantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languageProficiency"]>



  export type LanguageProficiencySelectScalar = {
    id?: boolean
    language?: boolean
    proficiency?: boolean
    applicantId?: boolean
  }

  export type LanguageProficiencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "language" | "proficiency" | "applicantId", ExtArgs["result"]["languageProficiency"]>
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
      proficiency: string
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
    readonly proficiency: FieldRef<"LanguageProficiency", 'String'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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


  export const AcademicQualificationScalarFieldEnum: {
    id: 'id',
    institution: 'institution',
    degree: 'degree',
    fieldOfStudy: 'fieldOfStudy',
    startDate: 'startDate',
    endDate: 'endDate',
    applicantId: 'applicantId'
  };

  export type AcademicQualificationScalarFieldEnum = (typeof AcademicQualificationScalarFieldEnum)[keyof typeof AcademicQualificationScalarFieldEnum]


  export const WorkExperienceScalarFieldEnum: {
    id: 'id',
    company: 'company',
    position: 'position',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    applicantId: 'applicantId'
  };

  export type WorkExperienceScalarFieldEnum = (typeof WorkExperienceScalarFieldEnum)[keyof typeof WorkExperienceScalarFieldEnum]


  export const LanguageProficiencyScalarFieldEnum: {
    id: 'id',
    language: 'language',
    proficiency: 'proficiency',
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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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


  export const AcademicQualificationOrderByRelevanceFieldEnum: {
    institution: 'institution',
    degree: 'degree',
    fieldOfStudy: 'fieldOfStudy'
  };

  export type AcademicQualificationOrderByRelevanceFieldEnum = (typeof AcademicQualificationOrderByRelevanceFieldEnum)[keyof typeof AcademicQualificationOrderByRelevanceFieldEnum]


  export const WorkExperienceOrderByRelevanceFieldEnum: {
    company: 'company',
    position: 'position',
    description: 'description'
  };

  export type WorkExperienceOrderByRelevanceFieldEnum = (typeof WorkExperienceOrderByRelevanceFieldEnum)[keyof typeof WorkExperienceOrderByRelevanceFieldEnum]


  export const LanguageProficiencyOrderByRelevanceFieldEnum: {
    language: 'language',
    proficiency: 'proficiency'
  };

  export type LanguageProficiencyOrderByRelevanceFieldEnum = (typeof LanguageProficiencyOrderByRelevanceFieldEnum)[keyof typeof LanguageProficiencyOrderByRelevanceFieldEnum]


  export const ComputerSkillOrderByRelevanceFieldEnum: {
    skill: 'skill',
    proficiency: 'proficiency'
  };

  export type ComputerSkillOrderByRelevanceFieldEnum = (typeof ComputerSkillOrderByRelevanceFieldEnum)[keyof typeof ComputerSkillOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


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
  }

  export type EmployerOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    jobs?: JobOrderByRelationAggregateInput
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
    employerId?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    employer?: XOR<EmployerScalarRelationFilter, EmployerWhereInput>
    applications?: ApplicationListRelationFilter
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employer?: EmployerOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
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
    employerId?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    employer?: XOR<EmployerScalarRelationFilter, EmployerWhereInput>
    applications?: ApplicationListRelationFilter
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
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
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    jobId?: SortOrder
    applicantId?: SortOrder
    createdAt?: SortOrder
    job?: JobOrderByWithRelationInput
    applicant?: ApplicantOrderByWithRelationInput
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

  export type AcademicQualificationWhereInput = {
    AND?: AcademicQualificationWhereInput | AcademicQualificationWhereInput[]
    OR?: AcademicQualificationWhereInput[]
    NOT?: AcademicQualificationWhereInput | AcademicQualificationWhereInput[]
    id?: IntFilter<"AcademicQualification"> | number
    institution?: StringFilter<"AcademicQualification"> | string
    degree?: StringFilter<"AcademicQualification"> | string
    fieldOfStudy?: StringNullableFilter<"AcademicQualification"> | string | null
    startDate?: DateTimeFilter<"AcademicQualification"> | Date | string
    endDate?: DateTimeNullableFilter<"AcademicQualification"> | Date | string | null
    applicantId?: IntFilter<"AcademicQualification"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type AcademicQualificationOrderByWithRelationInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    applicantId?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    _relevance?: AcademicQualificationOrderByRelevanceInput
  }

  export type AcademicQualificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AcademicQualificationWhereInput | AcademicQualificationWhereInput[]
    OR?: AcademicQualificationWhereInput[]
    NOT?: AcademicQualificationWhereInput | AcademicQualificationWhereInput[]
    institution?: StringFilter<"AcademicQualification"> | string
    degree?: StringFilter<"AcademicQualification"> | string
    fieldOfStudy?: StringNullableFilter<"AcademicQualification"> | string | null
    startDate?: DateTimeFilter<"AcademicQualification"> | Date | string
    endDate?: DateTimeNullableFilter<"AcademicQualification"> | Date | string | null
    applicantId?: IntFilter<"AcademicQualification"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id">

  export type AcademicQualificationOrderByWithAggregationInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
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
    institution?: StringWithAggregatesFilter<"AcademicQualification"> | string
    degree?: StringWithAggregatesFilter<"AcademicQualification"> | string
    fieldOfStudy?: StringNullableWithAggregatesFilter<"AcademicQualification"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"AcademicQualification"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"AcademicQualification"> | Date | string | null
    applicantId?: IntWithAggregatesFilter<"AcademicQualification"> | number
  }

  export type WorkExperienceWhereInput = {
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    id?: IntFilter<"WorkExperience"> | number
    company?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    startDate?: DateTimeFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    description?: StringNullableFilter<"WorkExperience"> | string | null
    applicantId?: IntFilter<"WorkExperience"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type WorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    applicantId?: SortOrder
    applicant?: ApplicantOrderByWithRelationInput
    _relevance?: WorkExperienceOrderByRelevanceInput
  }

  export type WorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    OR?: WorkExperienceWhereInput[]
    NOT?: WorkExperienceWhereInput | WorkExperienceWhereInput[]
    company?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    startDate?: DateTimeFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    description?: StringNullableFilter<"WorkExperience"> | string | null
    applicantId?: IntFilter<"WorkExperience"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id">

  export type WorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
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
    company?: StringWithAggregatesFilter<"WorkExperience"> | string
    position?: StringWithAggregatesFilter<"WorkExperience"> | string
    startDate?: DateTimeWithAggregatesFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"WorkExperience"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"WorkExperience"> | string | null
    applicantId?: IntWithAggregatesFilter<"WorkExperience"> | number
  }

  export type LanguageProficiencyWhereInput = {
    AND?: LanguageProficiencyWhereInput | LanguageProficiencyWhereInput[]
    OR?: LanguageProficiencyWhereInput[]
    NOT?: LanguageProficiencyWhereInput | LanguageProficiencyWhereInput[]
    id?: IntFilter<"LanguageProficiency"> | number
    language?: StringFilter<"LanguageProficiency"> | string
    proficiency?: StringFilter<"LanguageProficiency"> | string
    applicantId?: IntFilter<"LanguageProficiency"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }

  export type LanguageProficiencyOrderByWithRelationInput = {
    id?: SortOrder
    language?: SortOrder
    proficiency?: SortOrder
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
    proficiency?: StringFilter<"LanguageProficiency"> | string
    applicantId?: IntFilter<"LanguageProficiency"> | number
    applicant?: XOR<ApplicantScalarRelationFilter, ApplicantWhereInput>
  }, "id">

  export type LanguageProficiencyOrderByWithAggregationInput = {
    id?: SortOrder
    language?: SortOrder
    proficiency?: SortOrder
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
    proficiency?: StringWithAggregatesFilter<"LanguageProficiency"> | string
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

  export type UserCreateInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
    employer?: EmployerCreateNestedOneWithoutUserInput
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
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUpdateOneWithoutUserNestedInput
    employer?: EmployerUpdateOneWithoutUserNestedInput
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
  }

  export type EmployerUncheckedCreateInput = {
    id?: number
    companyName: string
    address: string
    userId: number
    createdAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmployerNestedInput
    jobs?: JobUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutEmployerNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: EmployerCreateNestedOneWithoutJobsInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    employerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUpdateOneRequiredWithoutJobsNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    employerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    employerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    employerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    status?: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
    applicant: ApplicantCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    status?: string
    jobId: number
    applicantId: number
    createdAt?: Date | string
  }

  export type ApplicationUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
    applicant?: ApplicantUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    jobId?: IntFieldUpdateOperationsInput | number
    applicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AcademicQualificationCreateInput = {
    institution: string
    degree: string
    fieldOfStudy?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    applicant: ApplicantCreateNestedOneWithoutQualificationsInput
  }

  export type AcademicQualificationUncheckedCreateInput = {
    id?: number
    institution: string
    degree: string
    fieldOfStudy?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    applicantId: number
  }

  export type AcademicQualificationUpdateInput = {
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicant?: ApplicantUpdateOneRequiredWithoutQualificationsNestedInput
  }

  export type AcademicQualificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type AcademicQualificationCreateManyInput = {
    id?: number
    institution: string
    degree: string
    fieldOfStudy?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    applicantId: number
  }

  export type AcademicQualificationUpdateManyMutationInput = {
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcademicQualificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkExperienceCreateInput = {
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    applicant: ApplicantCreateNestedOneWithoutExperiencesInput
  }

  export type WorkExperienceUncheckedCreateInput = {
    id?: number
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    applicantId: number
  }

  export type WorkExperienceUpdateInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicant?: ApplicantUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type WorkExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkExperienceCreateManyInput = {
    id?: number
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    applicantId: number
  }

  export type WorkExperienceUpdateManyMutationInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type LanguageProficiencyCreateInput = {
    language: string
    proficiency: string
    applicant: ApplicantCreateNestedOneWithoutLanguagesInput
  }

  export type LanguageProficiencyUncheckedCreateInput = {
    id?: number
    language: string
    proficiency: string
    applicantId: number
  }

  export type LanguageProficiencyUpdateInput = {
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    applicant?: ApplicantUpdateOneRequiredWithoutLanguagesNestedInput
  }

  export type LanguageProficiencyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
  }

  export type LanguageProficiencyCreateManyInput = {
    id?: number
    language: string
    proficiency: string
    applicantId: number
  }

  export type LanguageProficiencyUpdateManyMutationInput = {
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageProficiencyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ApplicantNullableScalarRelationFilter = {
    is?: ApplicantWhereInput | null
    isNot?: ApplicantWhereInput | null
  }

  export type EmployerNullableScalarRelationFilter = {
    is?: EmployerWhereInput | null
    isNot?: EmployerWhereInput | null
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type EmployerScalarRelationFilter = {
    is?: EmployerWhereInput
    isNot?: EmployerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    id?: SortOrder
    employerId?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    status?: SortOrder
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
    employerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    id?: SortOrder
    employerId?: SortOrder
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

  export type AcademicQualificationOrderByRelevanceInput = {
    fields: AcademicQualificationOrderByRelevanceFieldEnum | AcademicQualificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AcademicQualificationCountOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    applicantId?: SortOrder
  }

  export type AcademicQualificationAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type AcademicQualificationMaxOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    applicantId?: SortOrder
  }

  export type AcademicQualificationMinOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    applicantId?: SortOrder
  }

  export type AcademicQualificationSumOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
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

  export type WorkExperienceOrderByRelevanceInput = {
    fields: WorkExperienceOrderByRelevanceFieldEnum | WorkExperienceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    applicantId?: SortOrder
  }

  export type WorkExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type WorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    applicantId?: SortOrder
  }

  export type WorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
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
    proficiency?: SortOrder
    applicantId?: SortOrder
  }

  export type LanguageProficiencyAvgOrderByAggregateInput = {
    id?: SortOrder
    applicantId?: SortOrder
  }

  export type LanguageProficiencyMaxOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    proficiency?: SortOrder
    applicantId?: SortOrder
  }

  export type LanguageProficiencyMinOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    proficiency?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type JobUncheckedCreateNestedManyWithoutEmployerInput = {
    create?: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput> | JobCreateWithoutEmployerInput[] | JobUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobCreateOrConnectWithoutEmployerInput | JobCreateOrConnectWithoutEmployerInput[]
    createMany?: JobCreateManyEmployerInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
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

  export type ApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type ApplicantCreateNestedOneWithoutQualificationsInput = {
    create?: XOR<ApplicantCreateWithoutQualificationsInput, ApplicantUncheckedCreateWithoutQualificationsInput>
    connectOrCreate?: ApplicantCreateOrConnectWithoutQualificationsInput
    connect?: ApplicantWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type ApplicantCreateWithoutUserInput = {
    fullName: string
    nida: string
    createdAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutApplicantInput
    qualifications?: AcademicQualificationCreateNestedManyWithoutApplicantInput
    experiences?: WorkExperienceCreateNestedManyWithoutApplicantInput
    languages?: LanguageProficiencyCreateNestedManyWithoutApplicantInput
    skills?: ComputerSkillCreateNestedManyWithoutApplicantInput
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
  }

  export type EmployerUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    address: string
    createdAt?: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutEmployerInput
  }

  export type EmployerCreateOrConnectWithoutUserInput = {
    where: EmployerWhereUniqueInput
    create: XOR<EmployerCreateWithoutUserInput, EmployerUncheckedCreateWithoutUserInput>
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
  }

  export type EmployerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutEmployerNestedInput
  }

  export type UserCreateWithoutApplicantInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    employer?: EmployerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApplicantInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    employer?: EmployerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApplicantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicantInput, UserUncheckedCreateWithoutApplicantInput>
  }

  export type ApplicationCreateWithoutApplicantInput = {
    status?: string
    createdAt?: Date | string
    job: JobCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: number
    status?: string
    jobId: number
    createdAt?: Date | string
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
    institution: string
    degree: string
    fieldOfStudy?: string | null
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type AcademicQualificationUncheckedCreateWithoutApplicantInput = {
    id?: number
    institution: string
    degree: string
    fieldOfStudy?: string | null
    startDate: Date | string
    endDate?: Date | string | null
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
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
  }

  export type WorkExperienceUncheckedCreateWithoutApplicantInput = {
    id?: number
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
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
    proficiency: string
  }

  export type LanguageProficiencyUncheckedCreateWithoutApplicantInput = {
    id?: number
    language: string
    proficiency: string
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
  }

  export type UserUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUncheckedUpdateOneWithoutUserNestedInput
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
    institution?: StringFilter<"AcademicQualification"> | string
    degree?: StringFilter<"AcademicQualification"> | string
    fieldOfStudy?: StringNullableFilter<"AcademicQualification"> | string | null
    startDate?: DateTimeFilter<"AcademicQualification"> | Date | string
    endDate?: DateTimeNullableFilter<"AcademicQualification"> | Date | string | null
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
    company?: StringFilter<"WorkExperience"> | string
    position?: StringFilter<"WorkExperience"> | string
    startDate?: DateTimeFilter<"WorkExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkExperience"> | Date | string | null
    description?: StringNullableFilter<"WorkExperience"> | string | null
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
    proficiency?: StringFilter<"LanguageProficiency"> | string
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

  export type UserCreateWithoutEmployerInput = {
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployerInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant?: ApplicantUncheckedCreateNestedOneWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobUncheckedCreateWithoutEmployerInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobCreateOrConnectWithoutEmployerInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutEmployerInput, JobUncheckedCreateWithoutEmployerInput>
  }

  export type JobCreateManyEmployerInputEnvelope = {
    data: JobCreateManyEmployerInput | JobCreateManyEmployerInput[]
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
  }

  export type UserUncheckedUpdateWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: ApplicantUncheckedUpdateOneWithoutUserNestedInput
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

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: IntFilter<"Job"> | number
    title?: StringFilter<"Job"> | string
    description?: StringFilter<"Job"> | string
    location?: StringNullableFilter<"Job"> | string | null
    status?: StringFilter<"Job"> | string
    employerId?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
  }

  export type EmployerCreateWithoutJobsInput = {
    companyName: string
    address: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmployerInput
  }

  export type EmployerUncheckedCreateWithoutJobsInput = {
    id?: number
    companyName: string
    address: string
    userId: number
    createdAt?: Date | string
  }

  export type EmployerCreateOrConnectWithoutJobsInput = {
    where: EmployerWhereUniqueInput
    create: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
  }

  export type ApplicationCreateWithoutJobInput = {
    status?: string
    createdAt?: Date | string
    applicant: ApplicantCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutJobInput = {
    id?: number
    status?: string
    applicantId: number
    createdAt?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationCreateManyJobInputEnvelope = {
    data: ApplicationCreateManyJobInput | ApplicationCreateManyJobInput[]
    skipDuplicates?: boolean
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
  }

  export type EmployerUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type JobCreateWithoutApplicationsInput = {
    title: string
    description: string
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    employer: EmployerCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    employerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
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
  }

  export type ApplicantCreateOrConnectWithoutApplicationsInput = {
    where: ApplicantWhereUniqueInput
    create: XOR<ApplicantCreateWithoutApplicationsInput, ApplicantUncheckedCreateWithoutApplicationsInput>
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employer?: EmployerUpdateOneRequiredWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    employerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type ApplicationCreateManyApplicantInput = {
    id?: number
    status?: string
    jobId: number
    createdAt?: Date | string
  }

  export type AcademicQualificationCreateManyApplicantInput = {
    id?: number
    institution: string
    degree: string
    fieldOfStudy?: string | null
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type WorkExperienceCreateManyApplicantInput = {
    id?: number
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
  }

  export type LanguageProficiencyCreateManyApplicantInput = {
    id?: number
    language: string
    proficiency: string
  }

  export type ComputerSkillCreateManyApplicantInput = {
    id?: number
    skill: string
    proficiency: string
  }

  export type ApplicationUpdateWithoutApplicantInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    jobId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    jobId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicQualificationUpdateWithoutApplicantInput = {
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcademicQualificationUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcademicQualificationUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkExperienceUpdateWithoutApplicantInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkExperienceUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LanguageProficiencyUpdateWithoutApplicantInput = {
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageProficiencyUncheckedUpdateWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageProficiencyUncheckedUpdateManyWithoutApplicantInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
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

  export type JobCreateManyEmployerInput = {
    id?: number
    title: string
    description: string
    location?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobUpdateWithoutEmployerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type ApplicationUncheckedUpdateWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    applicantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
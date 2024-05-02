import { ApiProperty } from '@nestjs/swagger';

// import { CommonFieldsDto } from './common-fields.dto';

// export class NewUserDto {
//   @ApiProperty()
//   user_name: string;
//   @ApiProperty()
//   password: string;
//   @ApiProperty()
//   mobile_no: number;
// }

// export class updatepodnumber {
//   @ApiProperty()
//   gender: any;
//   @ApiProperty()
//   name: any;
//   @ApiProperty()
//   qualification: any;
//   @ApiProperty()
//   date: any;
// }

export class Insertempdetails {
  @ApiProperty()
  emp_name: string;
  @ApiProperty()
  emp_no: string;
  @ApiProperty()
  issue_report: string;
  @ApiProperty()
  qr_code: string[];
  @ApiProperty()
  date_time: string;
}

export class Insertdetails {


  @ApiProperty()
  qr_codes: string[];

}




export class DomainUserDetails {
  @ApiProperty()
  domain: string;
  @ApiProperty()
  description: string;

}


export class PutUserDetails {
  @ApiProperty()
  username: string;


}
export class UpdateUserDetails {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  language: string;
  @ApiProperty()
  quota: string;
}


export class UpdateAdminDetails {
  @ApiProperty()
  username: any;
}


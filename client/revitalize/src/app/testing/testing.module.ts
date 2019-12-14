import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { API_SERVICE_MOCK_PROVIDER } from "./mocks/api.service.mock";


@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
  ],
  providers: [
    API_SERVICE_MOCK_PROVIDER
  ],
})
export class TestingModule {}

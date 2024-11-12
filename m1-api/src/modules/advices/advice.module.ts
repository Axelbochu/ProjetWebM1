import { Module } from "@nestjs/common";
import { AdviceController } from "./advice.controller";
import { AdviceService } from "./advice.service";
import { AdviceRepository } from "./advice.repository";

@Module({
    imports: [],
    controllers: [AdviceController],
    providers: [AdviceService, AdviceRepository],
})
export class AdviceModule {}
import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { CommentController } from './comment.controller'
import { CommentModel } from './comment.model'
import { CommentService } from './comment.service'

@Module({
	controllers: [CommentController],
	providers: [CommentService],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: CommentModel,
				schemaOptions: {
					collection: 'Comment'
				}
			}
		])
	]
})
export class CommentModule {}

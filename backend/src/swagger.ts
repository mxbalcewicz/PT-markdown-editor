import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Markdown editor')
  .setVersion('1.0')
  .addBearerAuth();

['auth'].forEach((tag) => swaggerConfig.addTag(tag));

export default swaggerConfig;

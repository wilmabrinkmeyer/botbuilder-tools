import { IApp } from 'src/interfaces/luis/apps/IApp';
import { markdownWriterFactory } from '../../../helpers/markdown-writer';
import { intentsSectionRenderer } from './intents-section/intents-section-renderer';
import { simpleEntitiesSectionRenderer } from './simple-entities-section/simple-entities-section-renderer';
import { prebuiltEntitiesSectionRenderer } from './prebuilt-entities-section/prebuilt-entities-section-renderer';
import { phraseListSectionRenderer } from './phrase-lists-section/phrase-lists-section-renderer';
import { listEntitiesSectionRenderer } from './list-entities-section/list-entities-section-renderer';
import { regexEntitiesSectionRenderer } from './regex-entities-section/regex-entities-section-renderer';

/**
 * @description
 * Renders the given app to Lu file format.
 *
 * @param app The app object to render.
 */
export const appRenderer = (app: IApp): string => {
	const writer = markdownWriterFactory();

	intentsSectionRenderer(app, writer);
	simpleEntitiesSectionRenderer(app, writer);
	prebuiltEntitiesSectionRenderer(app, writer);
	phraseListSectionRenderer(app, writer);
	listEntitiesSectionRenderer(app, writer);
	regexEntitiesSectionRenderer(app, writer);

	return writer.render();
};

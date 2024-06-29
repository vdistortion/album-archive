import { Component, Input } from '@angular/core';
import { TypeStreaming } from '../../../../db/types';

@Component({
  selector: 'app-streaming-list',
  standalone: true,
  imports: [],
  templateUrl: './streaming-list.component.html',
  styleUrl: './streaming-list.component.scss',
})
export class StreamingListComponent {
  @Input({ required: true }) public streaming: TypeStreaming | undefined;
}

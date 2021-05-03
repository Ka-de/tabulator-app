import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { AppState } from "@app/store";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";
import { GetTable } from "./tables-store/tables.action";

@Injectable()
export class TableResolver implements Resolve<Subscription>{
    constructor(
        private store: Store<AppState>
    ) { }

    resolve() {
        //resolve a table_id and get the table
        return this.store.select(state => state.router.state.params.id)
            .pipe(
                take(1)
            )
            .subscribe(id => {
                this.store.dispatch(new GetTable(id));
            })
    }
}
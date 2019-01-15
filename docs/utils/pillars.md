# Utilities for Pillars Configuration

All these utilities can be thought of a reducing the `PILLAR_CONFIG` object in some way, at times against a set of category data.

The intention here is to work with `deptSlug` and `pillarSlug` as those values are available via `router` state.

Additionally, `categories` are intended to be provided by your component’s or view’s call to `loadPillarCategories(deptSlug)`.

*Note: At this time, pillars only exist for the women vertical*

## API

### `getDepartment(deptSlug)`

Returns the department.

### `isStepped(deptSlug)`

Returns true if given department should be displayed with step numbers, false otherwise.

### `getAllPillarCategoryIds(deptSlug)`

Returns the list of all a department’s pillar IDs with the department’s own ID appended.

### `getPillars(deptSlug)`

Returns the pillars for a department.

### `getPillarGroups(deptSlug)`

Returns a list of the department’s pillar group objects.

### `getSafePillarCategoriesByGroup(deptSlug, pillarSlug, groupKey, categories)`

Maps a particular department group’s pillar IDs to corresponding category objects.

This is safe in that pillar category IDs are checked against the provided categories. Any pillar IDs missing from the target categories (stale data, environment differences), will fail gracefully, being replaced by its department’s category ID.

### `getSafePillarCategoriesForAllGroups(deptSlug, pillarSlug, categories)`

Returns a list of pillar categories objects for all groups with this shape:

  `{ name: <group name>, categories: <list of category objects> }`
